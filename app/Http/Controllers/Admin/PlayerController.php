<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Players;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PlayerController extends Controller
{
    public function index()
    {
        $pemain = Players::paginate(10);

        return Inertia::render('admin/player', [
            'pemain' => $pemain,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'team_id' => 'required|integer',
            'full_name' => 'required|string|max:255',
            'jersey_number' => 'nullable|integer',
            'position' => 'nullable|string|max:100',
            'goals' => 'nullable|integer|min:0',
            'assists' => 'nullable|integer|min:0',
            'age' => 'nullable|integer|min:0',
            'country' => 'nullable|string|max:100',
            'photo_url' => 'nullable|string',
        ]);

        Players::create($validated);

        return redirect()->back()->with('success', 'Pemain berhasil ditambahkan.');
    }

    public function update(Request $request, Players $player)
    {
        $validated = $request->validate([
            'team_id' => 'required|integer',
            'full_name' => 'required|string|max:255',
            'jersey_number' => 'nullable|integer',
            'position' => 'nullable|string|max:100',
            'goals' => 'nullable|integer|min:0',
            'assists' => 'nullable|integer|min:0',
            'age' => 'nullable|integer|min:0',
            'country' => 'nullable|string|max:100',
            'photo_url' => 'nullable|string',
        ]);

        $player->update($validated);

        return redirect()->back()->with('success', 'Pemain berhasil diperbarui.');
    }

    public function destroy(Players $player)
    {
        $player->delete();

        return redirect()->back()->with('success', 'Pemain berhasil dihapus.');
    }
}
