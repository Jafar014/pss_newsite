<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Players extends Model
{
    protected $table = 'players';

    protected $fillable = [
        'team_id',
        'full_name',
        'jersey_number',
        'position',
        'matches_played',
        'goals',
        'assists',
        'saved_cleansheet',
        'age',
        'country',
        'photo_url',
    ];

    public function team()
    {
        return $this->belongsTo(Teams::class, 'team_id');
    }
}
