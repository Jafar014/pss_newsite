<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('news index page loads', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    $response = $this->get(route('admin.news'));
    $response->assertStatus(200);
});

test('news store validates and creates', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    $response = $this->post(route('admin.news.store'), [
        'title' => 'Test Berita',
        'slug' => 'test-berita',
        'content' => 'Ini adalah konten berita',
        'status' => 'draft',
    ]);

    $response->assertRedirect();

    $this->assertDatabaseHas('news', [
        'slug' => 'test-berita',
    ]);
});
