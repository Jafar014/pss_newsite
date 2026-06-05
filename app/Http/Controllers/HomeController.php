<?php

namespace App\Http\Controllers;

use App\Models\Players;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke(Request $request)
    {
        $players = Players::inRandomOrder()->limit(4)->get()->map(function ($player) {
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
        })->values();

        $clubs = DB::table('clubs')->pluck('logo_url', 'name')->all();

        $pssFixtures = DB::table('fixtures')
            ->where('home_team', 'PSS SLEMAN')
            ->orWhere('away_team', 'PSS SLEMAN')
            ->orderBy('match_date', 'desc')
            ->get();

        $lastFixture = $pssFixtures->first();

        $lastMatch = $lastFixture ? [
            'id' => (string) $lastFixture->id,
            'date' => $lastFixture->match_date,
            'time' => '15.00',
            'homeTeam' => $lastFixture->home_team,
            'homeTeamLogo' => $clubs[$lastFixture->home_team] ?? null,
            'awayTeam' => $lastFixture->away_team,
            'awayTeamLogo' => $clubs[$lastFixture->away_team] ?? null,
            'homeScore' => $lastFixture->home_goals,
            'awayScore' => $lastFixture->away_goals,
            'venue' => $lastFixture->venue,
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

        $standings = DB::table('klasemen')
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
            ]);

        return Inertia::render('home', [
            'players' => $players,
            'lastMatch' => $lastMatch,
            'upcomingMatch' => $upcomingMatch,
            'standings' => $standings,
        ]);
    }
}
