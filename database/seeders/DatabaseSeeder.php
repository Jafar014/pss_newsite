<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Fajar',
            'username' => 'admin',
            'email' => 'admin@pss-sleman.id',
            'password' => bcrypt('-FjrNjm10'),
        ]);
    }
}
