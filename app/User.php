<?php
namespace App;




use Carbon\Carbon;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable =
        [
            'fname',
            'lname',
            'mobile',
            'sms_code',
            'ip',
            'password',
            'address',
            'image_path',
            'type',
            'device',
            'is_active',

        ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];



    public function orders()
    {
        return $this->hasMany(Order::class);

    }

    public function getCreatedAtAttribute($value)
    {

        return Carbon::createFromFormat('Y-m-d H:i:s', $value)->diffForHumans();
    }

    public function scopeSearchByKeyword($query, $keyword)
    {

        if ($keyword != '') {
          $query->where(function ($q) use ($keyword) {
                 $q->where("lname", "LIKE", "%$keyword%")
                    ->orWhere("fname", "LIKE", "%$keyword%")
                    ->orWhere("referer_id", "=", $keyword)
                    ->orWhere("email", "LIKE", "%$keyword%")
                    ->orWhere("code_melli", "LIKE", "%$keyword%");
            });
        }

        return $query;
    }


    public function addNew($input)

    {

        $check = static::where('google_id', $input['google_id'])->first();


        if (is_null($check)) {

            return static::create($input);

        }


        return $check;

    }


}





