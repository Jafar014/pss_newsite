<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $table = 'news';

    protected $fillable = [
        'title',
        'slug',
        'content',
        'excerpt',
        'thumbnail',
        'category',
        'author',
        'status',
        'views',
    ];

    protected $casts = [
        'published_at' => 'datetime',
    ];
}
