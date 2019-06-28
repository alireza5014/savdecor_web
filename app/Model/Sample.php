<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Sample extends Model
{
    protected $fillable = [
        'title',
        'image_path',
        'service_id',
    ];
}

