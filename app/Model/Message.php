<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [
        'fname',
        'lname',
        'mobile',
        'sms_code',
        'password',
        'sent_count',
        'original_password',

      ];
}
