<?php

namespace App\Model;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
  protected $fillable=[
      'id',
      'service_id',
      'sample_id',
      'code',
      'title',
      'image_path',
      'price',
      'count',
      'discount',
      'brand',
      'country',
      'size',
      'description',
      'is_published',
  ];

    public function getDescriptionWebAttribute($value)
    {

        return trim(preg_replace('/\s\s+/', '\n', $value));;


    }
    public function getDiscountAttribute($value)
    {

        return convert_to_digit($value);
    }

//    public function getPriceAttribute($value)
//    {
//
//        return convert_to_digit(number_format($value));
//    }


    public function getCreatedAtAttribute($value)
    {

        return Carbon::createFromFormat('Y-m-d H:i:s', $value)->diffForHumans();
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class);

    }

    public function comments()
    {
        return $this->hasMany(Comment::class);

    }

    public function favourite()
    {
        return $this->hasOne(Favourite::class);

    }

    public function service()
    {
    return $this->belongsTo(Service::class,'service_id','id');
  }

    public function sample()
    {
        return $this->belongsTo(Sample::class,'sample_id','id');
    }


}
