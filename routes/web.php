<?php

use App\Http\Controllers\Admin\JadwalController;
use App\Http\Controllers\Admin\PlayerController;
use App\Http\Controllers\Admin\StandingController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\KompetisiController;
use App\Http\Controllers\Tim\SeniorTeamController;
use App\Models\News;
use App\Models\Staff;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
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
Route::inertia('/disclaimer', 'disclaimer')->name('disclaimer');
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
    Route::get('/sejarah', function () {
        $histories = [
            ['id' => 1, 'title' => 'Lahirnya PSS', 'date' => '1976-05-20', 'description' => 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
            ['id' => 2, 'title' => 'Era Keemasan', 'date' => '1986-05-20', 'description' => 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
            ['id' => 3, 'title' => 'Stadion Baru', 'date' => '2001-05-20', 'description' => 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
            ['id' => 4, 'title' => 'Prestasi Nasional', 'date' => '2010-11-15', 'description' => 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
        ];

        return inertia('admin/history', [
            'histories' => $histories,
        ]);
    })->name('admin.history');
    Route::get('/staff', function () {
        $staff = Staff::paginate(10);

        return inertia('admin/staff', [
            'staff' => $staff,
        ]);
    })->name('admin.staff');
    Route::post('/staff', function (Request $request) {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'role' => 'nullable|string|max:100',
            'photo_url' => 'nullable|string',
        ]);

        Staff::create($validated);

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Staff berhasil ditambahkan.']);

        return redirect()->back();
    })->name('admin.staff.store');
    Route::put('/staff/{staff}', function (Request $request, Staff $staff) {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'role' => 'nullable|string|max:100',
            'photo_url' => 'nullable|string',
        ]);

        $staff->update($validated);

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Staff berhasil diperbarui.']);

        return redirect()->back();
    })->name('admin.staff.update');
    Route::delete('/staff/{staff}', function (Staff $staff) {
        $staff->delete();

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Staff berhasil dihapus.']);

        return redirect()->back();
    })->name('admin.staff.destroy');
    Route::get('/pemain', [PlayerController::class, 'index'])->name('admin.player');
    Route::post('/pemain', [PlayerController::class, 'store'])->name('admin.player.store');
    Route::put('/pemain/{player}', [PlayerController::class, 'update'])->name('admin.player.update');
    Route::delete('/pemain/{player}', [PlayerController::class, 'destroy'])->name('admin.player.destroy');
    Route::get('/kompetisi/klasemen', [StandingController::class, 'index'])->name('admin.kompetisi.klasemen');
    Route::put('/kompetisi/klasemen/{standing}', [StandingController::class, 'update'])->name('admin.kompetisi.klasemen.update');
    Route::delete('/kompetisi/klasemen/{standing}', [StandingController::class, 'destroy'])->name('admin.kompetisi.klasemen.destroy');
    Route::get('/kompetisi/jadwal', [JadwalController::class, 'index'])->name('admin.kompetisi.jadwal');
    Route::post('/kompetisi/jadwal', [JadwalController::class, 'store'])->name('admin.kompetisi.jadwal.store');
    Route::put('/kompetisi/jadwal/{id}', [JadwalController::class, 'update'])->name('admin.kompetisi.jadwal.update');
    Route::delete('/kompetisi/jadwal/{id}', [JadwalController::class, 'destroy'])->name('admin.kompetisi.jadwal.destroy');
    Route::inertia('/settings', 'admin/settings')->name('admin.settings');

});

require __DIR__.'/settings.php';
