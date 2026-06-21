<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class JadwalController extends Controller
{
    public function index()
    {
        $fixtures = DB::table('fixtures')
            ->select('id', 'competition', 'gameweek', 'home_team', 'away_team', 'home_goals', 'away_goals', 'match_date', 'status', 'venue')
            ->orderBy('match_date')
            ->paginate(10);

        $clubs = DB::table('clubs')
            ->select('id', 'slug', 'name', 'logo_url')
            ->get()
            ->keyBy('name');

        return inertia('admin/kompetisi/jadwal', [
            'fixtures' => $fixtures,
            'clubs' => $clubs,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'competition' => 'required|string|max:255',
            'gameweek' => 'nullable|string|max:50',
            'home_team' => 'required|string|max:255',
            'away_team' => 'required|string|max:255',
            'home_goals' => 'nullable|integer|min:0',
            'away_goals' => 'nullable|integer|min:0',
            'match_date' => 'required|date',
            'status' => 'nullable|string|max:50',
            'venue' => 'nullable|string|max:255',
        ]);

        DB::table('fixtures')->insert($validated);

        return redirect()->back()->with('success', 'Jadwal berhasil ditambahkan.');
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'competition' => 'required|string|max:255',
            'gameweek' => 'nullable|string|max:50',
            'home_team' => 'required|string|max:255',
            'away_team' => 'required|string|max:255',
            'home_goals' => 'nullable|integer|min:0',
            'away_goals' => 'nullable|integer|min:0',
            'match_date' => 'required|date',
            'status' => 'nullable|string|max:50',
            'venue' => 'nullable|string|max:255',
        ]);

        DB::table('fixtures')->where('id', $id)->update($validated);

        return redirect()->back()->with('success', 'Jadwal berhasil diperbarui.');
    }

    public function destroy($id)
    {
        DB::table('fixtures')->where('id', $id)->delete();

        return redirect()->back()->with('success', 'Jadwal berhasil dihapus.');
    }
}
