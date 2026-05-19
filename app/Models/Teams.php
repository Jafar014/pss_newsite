<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Teams extends Model
{
    protected $table = 'teams';

    protected $fillable = [
        'name',
        'competition',
    ];

    public function players()
    {
        return $this->hasMany(Players::class, 'team_id');
    }
}
