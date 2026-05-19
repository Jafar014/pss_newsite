<?php

namespace App\Http\Controllers;

use App\Models\Players;
use Illuminate\Http\Request;
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

        return Inertia::render('home', [
            'players' => $players,
        ]);
    }
}
