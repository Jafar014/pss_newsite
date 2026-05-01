<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Standings extends Model
{
    protected $fillable = [
        'league_id', 'season', 'team_id', 'rank', 'points', 'played',
        'win', 'draw', 'lose', 'goals_for', 'goals_against', 'goal_diff',
    ];

    public function team()
    {
        return $this->belongsTo(Team::class);
    }

    public function league()
    {
        return $this->belongsTo(League::class);
    }
}
