<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class KompetisiController extends Controller
{
    public function index()
    {
        $fixtures = DB::table('fixtures')
            ->select('id', 'competition', 'gameweek', 'home_team', 'away_team', 'home_goals', 'away_goals', 'match_date', 'status', 'venue')
            ->orderBy('match_date')
            ->limit(200)
            ->get();

        $klasemen = DB::table('klasemen')
            ->select('id', 'pos', 'team_name', 'played', 'win', 'draw', 'lose', 'goals_for', 'goals_against', 'goal_difference', 'points')
            ->where('competition', 'PEGADAIAN_CHAMPIONSHIP_2025-26')
            ->where('grup', 'Timur')
            ->orderBy('pos')
            ->get();

        $club = DB::table('clubs')
            ->select('id', 'slug', 'name', 'logo_url', 'stadion')
            ->get();

        return Inertia::render('competition', [
            'fixtures' => $fixtures,
            'klasemen' => $klasemen,
            'club' => $club,
        ]);
    }
}
