<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\KompetisiController;
use App\Http\Controllers\Tim\SeniorTeamController;
use App\Models\News;
use App\Models\Staff;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::get('/', [HomeController::class, '__invoke'])->name('home');
Route::get('/debug', function () {
    return response()->json([
        'app_key' => env('APP_KEY') ? 'Set' : 'Not Set',
        'env' => app()->environment(),
        'php' => phpversion(),
        'time' => now()->toDateTimeString(),
    ]);
});

Route::inertia('/berita', 'news')->name('news');
Route::get('/berita/{id}', function ($id) {
    return inertia('content-news', ['id' => $id]);
})->name('berita.detail');
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

Route::inertia('/admin/login', 'admin/login')->name('admin.login');

Route::post('/admin/login', function (Request $request) {
    $credentials = $request->validate([
        'username' => ['required'],
        'password' => ['required'],
    ]);

    if (Auth::attempt($credentials, $request->boolean('remember'))) {
        $request->session()->regenerate();

        return redirect()->intended('/admin');
    }

    return back()->withErrors(['username' => 'Username atau password salah.']);
});

Route::prefix('admin')->group(function () {
    Route::inertia('/', 'admin/dashboard')->name('admin.dashboard');
    Route::get('/berita', function () {
        $news = News::latest('published_at')->paginate(5);

        return inertia('admin/news', [
            'news' => $news,
        ]);
    })->name('admin.news');
    Route::get('/staff', function () {
        $staff = Staff::paginate(10);

        return inertia('admin/staff', [
            'staff' => $staff,
        ]);
    })->name('admin.staff');
});

require __DIR__.'/settings.php';
