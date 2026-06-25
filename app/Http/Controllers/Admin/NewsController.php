<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::latest('published_at')->paginate(10);

        return Inertia::render('admin/news', [
            'news' => $news,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:news,slug',
            'content' => 'required|string',
            'excerpt' => 'nullable|string',
            'thumbnail' => 'nullable|string',
            'category' => 'nullable|string|max:100',
            'author' => 'nullable|string|max:100',
            'status' => 'required|string|in:draft,published,archived',
            'published_at' => 'nullable|date',
        ]);

        News::create($validated);

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Berita berhasil ditambahkan.']);

        return redirect()->back();
    }

    public function update(Request $request, News $news)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:news,slug,'.$news->id,
            'content' => 'required|string',
            'excerpt' => 'nullable|string',
            'thumbnail' => 'nullable|string',
            'category' => 'nullable|string|max:100',
            'author' => 'nullable|string|max:100',
            'status' => 'required|string|in:draft,published,archived',
            'published_at' => 'nullable|date',
        ]);

        $news->update($validated);

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Berita berhasil diperbarui.']);

        return redirect()->back();
    }

    public function destroy(News $news)
    {
        $news->delete();

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Berita berhasil dihapus.']);

        return redirect()->back();
    }
}
