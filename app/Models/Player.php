<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    protected $fillable = [
        'api_id', 'team_id', 'name', 'photo', 'birthdate', 'age', 'height', 'weight',
    ];

    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
