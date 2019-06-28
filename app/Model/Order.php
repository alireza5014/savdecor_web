<?php

namespace App\Model;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'product_id',
        'count',
        'total_price',
        'status',

    ];

    public function getCreatedAtAttribute($value)
    {

        return Carbon::createFromFormat('Y-m-d H:i:s', $value)->diffForHumans();
    }


    public function user()
    {
        return $this->belongsTo(User::class);

    }

    public function products()
    {
        return $this->belongsToMany(Product::class)->withPivot('count');

    }
}
