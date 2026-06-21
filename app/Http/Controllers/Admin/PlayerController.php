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
        $pemain = Players::paginate(7);

        return Inertia::render('admin/player', [
            'pemain' => $pemain,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'team_id' => 'required|integer',
            'full_name' => 'required|string|max:255',
            'jersey_number' => 'nullable|integer|unique:players,jersey_number',
            'position' => 'required|string|in:Goalkeeper,Defender,Midfielder,Forward',
            'goals' => 'nullable|integer|min:0',
            'assists' => 'nullable|integer|min:0',
            'age' => 'nullable|integer|min:0',
            'country' => 'nullable|string|max:100',
            'photo_url' => 'nullable|string',
        ], [
            'jersey_number.unique' => 'Nomor punggung sudah dipakai pemain lain.',
            'position.required' => 'Pilih posisi dahulu.',
            'position.in' => 'Pilih posisi yang valid.',
        ]);

        Players::create($validated);

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Pemain berhasil ditambahkan.']);

        return redirect()->back();
    }

    public function update(Request $request, Players $player)
    {
        $validated = $request->validate([
            'team_id' => 'required|integer',
            'full_name' => 'required|string|max:255',
            'jersey_number' => 'nullable|integer|unique:players,jersey_number,'.$player->id,
            'position' => 'required|string|in:Goalkeeper,Defender,Midfielder,Forward',
            'goals' => 'nullable|integer|min:0',
            'assists' => 'nullable|integer|min:0',
            'age' => 'nullable|integer|min:0',
            'country' => 'nullable|string|max:100',
            'photo_url' => 'nullable|string',
        ], [
            'jersey_number.unique' => 'Nomor punggung sudah dipakai pemain lain.',
            'position.required' => 'Pilih posisi dahulu.',
            'position.in' => 'Pilih posisi yang valid.',
        ]);

        $player->update($validated);

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Pemain berhasil diperbarui.']);

        return redirect()->back();
    }

    public function destroy(Players $player)
    {
        $player->delete();

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Pemain berhasil dihapus.']);

        return redirect()->back();
    }
}
