<?php

namespace App\Model;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class UserRequest extends Model
{
    protected $table='requests';
  protected $fillable=['id','user_id','request_type_id','state','city','date','description'];

    public function user()
    {
        return $this->belongsTo(User::class);

    }
    public function request_type()
    {
        return $this->hasOne(Request_type::class,'id','request_type_id');

    }
    public function request_types()
    {
        return $this->hasMany(Request_type::class);

    }
    public function getCreatedAtAttribute($value)
    {

        return Carbon::createFromFormat('Y-m-d H:i:s', $value)->diffForHumans();
    }

}
