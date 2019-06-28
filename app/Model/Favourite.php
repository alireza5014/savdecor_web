<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Favourite extends Model
{
    protected $table = 'favorites';
    protected $fillable = ['is_favourite', 'user_id', 'product_id'];
}
