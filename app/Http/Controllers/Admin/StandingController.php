<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Standing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StandingController extends Controller
{
    public function index()
    {
        $standings = Standing::orderBy('grup')->orderBy('points', 'desc')->get();
        $clubs = DB::table('clubs')->select('id', 'slug', 'name', 'logo_url')->get()->keyBy('name');

        return inertia('admin/kompetisi/klasemen', [
            'klasemen' => $standings,
            'clubs' => $clubs,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'competition' => 'required|string|max:255',
            'pos' => 'required|integer|min:1',
            'team_name' => 'required|string|max:255',
            'played' => 'required|integer|min:0',
            'win' => 'required|integer|min:0',
            'draw' => 'required|integer|min:0',
            'lose' => 'required|integer|min:0',
            'goals_for' => 'required|integer|min:0',
            'goals_against' => 'required|integer|min:0',
            'goal_difference' => 'required|integer',
            'points' => 'required|integer|min:0',
            'grup' => 'nullable|string|max:100',
        ]);

        Standing::create($validated);

        return redirect()->back()->with('success', 'Data berhasil ditambahkan.');
    }

    public function update(Request $request, Standing $standing)
    {
        $validated = $request->validate([
            'competition' => 'required|string|max:255',
            'pos' => 'required|integer|min:1',
            'team_name' => 'required|string|max:255',
            'played' => 'required|integer|min:0',
            'win' => 'required|integer|min:0',
            'draw' => 'required|integer|min:0',
            'lose' => 'required|integer|min:0',
            'goals_for' => 'required|integer|min:0',
            'goals_against' => 'required|integer|min:0',
            'goal_difference' => 'required|integer',
            'points' => 'required|integer|min:0',
            'grup' => 'nullable|string|max:100',
        ]);

        $standing->update($validated);

        return redirect()->back()->with('success', 'Data berhasil diperbarui.');
    }

    public function destroy(Standing $standing)
    {
        $standing->delete();

        return redirect()->back()->with('success', 'Data berhasil dihapus.');
    }
}
