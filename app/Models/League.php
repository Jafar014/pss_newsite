<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class League extends Model
{
    protected $fillable = ['api_id', 'name', 'country', 'logo'];

    public function standings()
    {
        return $this->hasMany(Standings::class);
    }

    public function fixtures()
    {
        return $this->hasMany(Fixture::class);
    }
}
