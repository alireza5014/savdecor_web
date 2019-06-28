<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Request_type extends Model
{

    public function request()
    {
        return $this->belongsTo(UserRequest::class);

    }
}
