<?php

namespace App\Model;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'id',
        'title',
        'image_path',
        'is_active',
        'unit',
    ];

    public function getCreatedAtAttribute($value)
    {

        return Carbon::createFromFormat('Y-m-d H:i:s', $value)->diffForHumans();
    }

    public function samples()
    {
        return $this->hasMany(Sample::class);

    }

    public function products()
    {
        return $this->hasMany(Product::class);

    }
}
