<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class KompetisiController extends Controller
{
    public function index()
    {
        $fixtures = DB::table('fixtures')
            ->orderBy('match_date')
            ->get()
            ->map(fn ($f) => [
                'id' => $f->id,
                'competition' => $f->competition,
                'gameweek' => $f->gameweek,
                'home_team' => $f->home_team,
                'away_team' => $f->away_team,
                'home_goals' => $f->home_goals,
                'away_goals' => $f->away_goals,
                'match_date' => $f->match_date,
                'status' => $f->status,
                'venue' => $f->venue,
            ]);

        $klasemen = DB::table('klasemen')
            ->where('competition', 'PEGADAIAN_CHAMPIONSHIP_2025-26')
            ->where('grup', 'Timur')
            ->orderBy('pos')
            ->get()
            ->map(fn ($k) => [
                'id' => $k->id,
                'pos' => $k->pos,
                'team_name' => $k->team_name,
                'played' => $k->played,
                'win' => $k->win,
                'draw' => $k->draw,
                'lose' => $k->lose,
                'goals_for' => $k->goals_for,
                'goals_against' => $k->goals_against,
                'goal_difference' => $k->goal_difference,
                'points' => $k->points,
            ]);

        $club = DB::table('clubs')
            ->get()
            ->map(fn ($c) => [
                'id' => $c->id,
                'slug' => $c->slug,
                'name' => $c->name,
                'logo_url' => $c->logo_url,
                'stadion' => $c->stadion,
            ]);

        return Inertia::render('competition', [
            'fixtures' => $fixtures,
            'klasemen' => $klasemen,
            'club' => $club,
        ]);
    }
}
