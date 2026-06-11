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
            ->orderBy('match_date', 'asc')
            ->get()
            ->map(fn ($row) => (array) $row)
            ->all()
        );

        $fixtures = array_map(fn ($f) => [
            'id' => (string) $f['id'],
            'gameweek' => $f['gameweek'],
            'date' => $f['match_date'],
            'homeTeam' => $f['home_team'],
            'homeTeamLogo' => $clubs[$f['home_team']] ?? null,
            'awayTeam' => $f['away_team'],
            'awayTeamLogo' => $clubs[$f['away_team']] ?? null,
            'homeScore' => $f['home_goals'],
            'awayScore' => $f['away_goals'],
            'venue' => $f['venue'],
            'status' => $f['status'],
        ], $pssFixtures);

        $lastMatch = $fixtures[0] ?? null;
        $upcomingMatch = null;

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
            'fixtures' => $fixtures,
        ]);
    }
}
