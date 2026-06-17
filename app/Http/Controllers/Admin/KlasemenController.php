<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class KlasemenController extends Controller
{
    public function index()
    {
        $klasemen = DB::table('klasemen')
            ->select('id', 'pos', 'team_name', 'played', 'win', 'draw', 'lose',
                'goals_for', 'goals_against', 'goal_difference', 'points',
                'competition', 'grup', 'scraped_at')
            ->orderBy('grup')
            ->orderBy('pos')
            ->get();

        $clubs = DB::table('clubs')
            ->select('id', 'slug', 'name', 'logo_url')
            ->get()
            ->keyBy('name');

        return inertia('admin/kompetisi/klasemen', [
            'klasemen' => $klasemen,
            'clubs' => $clubs,
        ]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
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
        ]);

        DB::table('klasemen')->where('id', $id)->update($validated);

        return redirect()->back()->with('success', 'Data klasemen berhasil diperbarui.');
    }

    public function destroy($id)
    {
        DB::table('klasemen')->where('id', $id)->delete();

        return redirect()->back()->with('success', 'Data klasemen berhasil dihapus.');
    }
}
