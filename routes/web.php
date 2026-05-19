<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\Tim\SeniorTeamController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', [HomeController::class, '__invoke'])->name('home');

Route::inertia('/berita', 'news')->name('news');
Route::get('/skuad', [SeniorTeamController::class, 'index'])->name('teams');
Route::get('/kompetisi', function () {
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

    return Inertia::render('competition', [
        'fixtures' => $fixtures,
        'klasemen' => $klasemen,
    ]);
})->name('competition');
Route::inertia('/sejarah', 'history')->name('history');
Route::inertia('/toko', 'store')->name('store');

Route::inertia('/old', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('old-home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
