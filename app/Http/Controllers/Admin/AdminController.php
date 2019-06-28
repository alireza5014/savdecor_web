<?php

namespace App\Http\Controllers\Admin;

use App\Admin;
use App\Analyze;

use App\Http\Controllers\Controller;

use App\Http\Requests\AdminModifyProfile;
use App\Model\User;

use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;

use Mockery\Exception;

class AdminController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:admin');
    }


    public function getLogout()
    {


        Auth::guard('admin')->logout();

        return redirect()->guest(route('admin.login'));

//        Auth::logout('admin');
//
//        return back();

    }

    public function modify_profile(AdminModifyProfile $request)
    {


        try {
            $res = Admin::where('id', getUserId('admin'))->update([
                'email' => $request->email,
                'fname' => $request->fname,
                'lname' => $request->lname,
                'password' => bcrypt($request->password),
            ]);

            if ($res > 0)
                return back()->with('success', " گذرواژه با موفقیت تغییر یافت ");
            else
                return back()->with('error', 'error');
        } catch (Exception $e) {

        }


    }

    public function profile()
    {
        $user = Admin::find(getUserId('admin'));
        return view('admin.profile', compact('user'));
    }


    public function index()
    {



        $data = [
            'همه کاربران' => User::count(),
//            'کاربران عضو ربات' => User::where('chat_id', '>', 0)->count(),

            'کاربران امروز' => User::where('created_at', '>', getToday())->count(),
            'کاربران دیروز' => User::where('created_at', '<', getToday())->where('created_at', '>', getYesterday())->count(),


            'IP های یکتا' => Analyze::distinct('ip')->count('ip'),

        ];

        return view('admin.home', compact('data'));
    }


}
