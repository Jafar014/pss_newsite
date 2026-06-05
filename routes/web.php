<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\KompetisiController;
use App\Http\Controllers\Tim\SeniorTeamController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::get('/', [HomeController::class, '__invoke'])->name('home');

Route::inertia('/berita', 'news')->name('news');
Route::inertia('/berita/{id}', 'content-news')->name('berita.detail');
Route::get('/skuad', [SeniorTeamController::class, 'index'])->name('teams');
Route::get('/kompetisi', [KompetisiController::class, 'index'])->name('competition');
Route::inertia('/galeri', 'gallery')->name('gallery');
Route::inertia('galeri/{matchday}', 'content-gallery')->name('content.gallery');
Route::inertia('/sejarah', 'history')->name('history');
Route::inertia('/toko', 'store')->name('store');
Route::inertia('/toko/produk/{slug}', 'store-product')->name('store.product');
Route::inertia('/kompetisi/week/{fixture}', 'match-report')->name('match.report');

Route::inertia('/old', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('old-home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
