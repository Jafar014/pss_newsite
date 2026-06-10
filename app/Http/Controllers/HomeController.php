<?php

namespace App\Http\Controllers;

use App\Models\Players;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke(Request $request)
    {
        $players = Cache::remember('home.players', 600, fn () => Players::inRandomOrder()->limit(4)->get()->map(function ($player) {
            $nameParts = explode(' ', $player->full_name);
            $lastName = count($nameParts) > 1 ? array_pop($nameParts) : '';
            $firstName = implode(' ', $nameParts);

            return [
                'id' => $player->id,
                'firstName' => $firstName,
                'lastName' => $lastName,
                'number' => (string) $player->jersey_number,
                'position' => $player->position ?? '',
                'image' => $player->photo_url ?? '../../half_body.jpg',
            ];
        })->values()->all()
        );

        $clubs = Cache::remember('home.clubs', 3600, fn () => DB::table('clubs')->pluck('logo_url', 'name')->all()
        );

        $pssFixtures = Cache::remember('home.fixtures', 300, fn () => DB::table('fixtures')
            ->where('home_team', 'PSS SLEMAN')
            ->orWhere('away_team', 'PSS SLEMAN')
            ->orderBy('match_date', 'desc')
            ->get()
            ->map(fn ($row) => (array) $row)
            ->all()
        );

        $lastFixture = $pssFixtures ? $pssFixtures[0] : null;

        $lastMatch = $lastFixture ? [
            'id' => (string) $lastFixture['id'],
            'date' => $lastFixture['match_date'],
            'time' => '15.00',
            'homeTeam' => $lastFixture['home_team'],
            'homeTeamLogo' => $clubs[$lastFixture['home_team']] ?? null,
            'awayTeam' => $lastFixture['away_team'],
            'awayTeamLogo' => $clubs[$lastFixture['away_team']] ?? null,
            'homeScore' => $lastFixture['home_goals'],
            'awayScore' => $lastFixture['away_goals'],
            'venue' => $lastFixture['venue'],
            'status' => 'finished',
        ] : null;

        $upcomingMatch = [
            'id' => 'upcoming',
            'date' => '2026-05-24',
            'time' => '19.00',
            'homeTeam' => 'PSS SLEMAN',
            'homeTeamLogo' => $clubs['PSS SLEMAN'] ?? null,
            'awayTeam' => 'PSIS SEMARANG',
            'awayTeamLogo' => $clubs['PSIS SEMARANG'] ?? null,
            'venue' => 'MAGUWOHARJO',
            'status' => 'upcoming',
        ];

        $standings = Cache::remember('home.standings', 300, fn () => DB::table('klasemen')
            ->where('competition', 'PEGADAIAN_CHAMPIONSHIP_2025-26')
            ->where('grup', 'Timur')
            ->orderBy('pos')
            ->limit(5)
            ->get()
            ->map(fn ($k) => [
                'position' => $k->pos,
                'team' => $k->team_name,
                'played' => $k->played,
                'won' => $k->win,
                'drawn' => $k->draw,
                'lost' => $k->lose,
                'points' => $k->points,
            ])
            ->all()
        );

        return Inertia::render('home', [
            'players' => Inertia::defer(fn () => $players),
            'lastMatch' => $lastMatch,
            'upcomingMatch' => $upcomingMatch,
            'standings' => Inertia::defer(fn () => $standings),
        ]);
    }
}
