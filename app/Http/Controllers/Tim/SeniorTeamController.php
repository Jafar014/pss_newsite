<?php

namespace App\Http\Controllers\Tim;

use App\Http\Controllers\Controller;
use App\Models\Players;
use App\Models\Staff;
use App\Models\Teams;
use Inertia\Inertia;

class SeniorTeamController extends Controller
{
    public function index()
    {
        $team = Teams::find(4);

        $players = Players::where('team_id', 4)->get()->map(function ($player) {
            return [
                'id' => $player->id,
                'full_name' => $player->full_name,
                'jersey_number' => $player->jersey_number,
                'position' => $player->position,
                'matches_played' => $player->matches_played,
                'goals' => $player->goals,
                'assists' => $player->assists,
                'saved_cleansheet' => $player->saved_cleansheet,
                'age' => $player->age,
                'country' => $player->country,
                'photo_url' => $player->photo_url,
            ];
        })->values();

        $staff = Staff::where('team_id', 4)->get()->map(function ($member) {
            return [
                'id' => $member->id,
                'full_name' => $member->full_name,
                'role' => $member->role,
                'photo_url' => $member->photo_url,
            ];
        })->values();

        return Inertia::render('teams', [
            'team' => [
                'id' => $team->id,
                'name' => $team->name,
                'competition' => $team->competition,
            ],
            'players' => $players,
            'staff' => $staff,
        ]);
    }
}
