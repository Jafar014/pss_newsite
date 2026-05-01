<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = ['api_id', 'name', 'code', 'logo', 'country'];

    public function players()
    {
        return $this->hasMany(Player::class);
    }

    public function staff()
    {
        return $this->hasMany(Staff::class);
    }

    public function homeFixtures()
    {
        return $this->hasMany(Fixture::class, 'home_team_id');
    }

    public function awayFixtures()
    {
        return $this->hasMany(Fixture::class, 'away_team_id');
    }

    public function standings()
    {
        return $this->hasMany(Standings::class);
    }
}
