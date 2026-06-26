<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('login screen can be rendered', function () {
    $response = $this->get(route('admin.login'));

    $response->assertOk();
});

test('users can authenticate using the admin login screen', function () {
    $user = User::factory()->create([
        'username' => 'testadmin',
        'password' => bcrypt('password'),
    ]);

    $response = $this->post(route('admin.login.store'), [
        'username' => 'testadmin',
        'password' => 'password',
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect(route('admin.dashboard', absolute: false));
});

test('users can not authenticate with invalid password', function () {
    $user = User::factory()->create([
        'username' => 'testadmin',
        'password' => bcrypt('password'),
    ]);

    $this->post(route('admin.login.store'), [
        'username' => 'testadmin',
        'password' => 'wrong-password',
    ]);

    $this->assertGuest();
});

test('users can logout', function () {
    $user = User::factory()->create([
        'username' => 'testadmin',
        'password' => bcrypt('password'),
    ]);

    $response = $this->actingAs($user)->get(route('admin.logout'));

    $this->assertGuest();
    $response->assertRedirect(route('admin.login'));
});

test('login screen redirects to admin login', function () {
    $response = $this->get(route('login'));

    $response->assertRedirect(route('admin.login'));
});
