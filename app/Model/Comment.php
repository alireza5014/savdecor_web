<?php

namespace App\Model;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['product_id', 'user_id', 'reply_id', 'message','is_published'];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');
    }

  public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function getCreatedAtAttribute($value)
    {

        return Carbon::createFromFormat('Y-m-d H:i:s', $value)->diffForHumans();
    }

}
