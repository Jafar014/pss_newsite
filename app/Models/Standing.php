<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Standing extends Model
{
    protected $table = 'klasemen';

    public $timestamps = false;

    protected $fillable = [
        'competition',
        'pos',
        'team_name',
        'played',
        'win',
        'draw',
        'lose',
        'goals_for',
        'goals_against',
        'goal_difference',
        'points',
        'grup',
        'scraped_at',
    ];
}
