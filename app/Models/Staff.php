<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    protected $table = 'staff';

    protected $fillable = [
        'full_name',
        'role',
        'photo_url',
    ];

    public function team()
    {
        return $this->belongsTo(Teams::class, 'team_id');
    }
}
