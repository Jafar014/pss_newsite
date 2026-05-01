<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // database liga
        Schema::create('leagues', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('api_id')->unique();
            $table->string('name');
            $table->string('country');
            $table->string('logo')->nullable();
            $table->timestamps();
        });

        // database tim
        Schema::create('teams', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('api_id')->unique();
            $table->string('name');
            $table->string('code')->nullable();
            $table->string('logo')->nullable();
            $table->string('country')->nullable();
            $table->timestamps();
        });

        // Peringkat liga
        Schema::create('standings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('league_id')->constrained()->onDelete('cascade');
            $table->unsignedInteger('season');
            $table->foreignId('team_id')->constrained()->onDelete('cascade');
            $table->integer('rank');
            $table->integer('points');
            $table->integer('played');
            $table->integer('win')->default(0);
            $table->integer('draw')->default(0);
            $table->integer('lose')->default(0);
            $table->integer('goals_for')->default(0);
            $table->integer('goals_against')->default(0);
            $table->integer('goal_diff')->default(0);
            $table->timestamps();
            $table->unique(['league_id', 'season', 'team_id']);
        });

        // jadwal liga
        Schema::create('fixtures', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('api_id')->unique();
            $table->foreignId('league_id')->constrained()->onDelete('cascade');
            $table->foreignId('home_team_id')->constrained('teams')->onDelete('cascade');
            $table->foreignId('away_team_id')->constrained('teams')->onDelete('cascade');
            $table->dateTime('datetime');
            $table->integer('home_goals')->nullable();
            $table->integer('away_goals')->nullable();
            $table->string('status')->default('NS'); // NS, HT, FT
            $table->integer('elapsed')->nullable();
            $table->timestamps();
            $table->index(['league_id', 'datetime']);
        });

        // Pemain
        Schema::create('players', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('api_id')->unique();
            $table->foreignId('team_id')->constrained()->onDelete('cascade');
            $table->string('name');
            $table->string('photo')->nullable();
            $table->date('birthdate')->nullable();
            $table->integer('age')->nullable();
            $table->decimal('height', 5, 2)->nullable();
            $table->string('weight')->nullable();
            $table->timestamps();
        });

        // staff
        Schema::create('staff', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('api_id')->unique();
            $table->foreignId('team_id')->constrained()->onDelete('cascade');
            $table->string('name');
            $table->string('photo')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('league');
        Schema::dropIfExists('teams');
        Schema::dropIfExists('standings');
        Schema::dropIfExists('fixtures');
        Schema::dropIfExists('players');
        Schema::dropIfExists('staff');
    }
};
