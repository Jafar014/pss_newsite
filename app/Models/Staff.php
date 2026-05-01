<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    protected $fillable = ['api_id', 'team_id', 'name', 'photo'];

    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
