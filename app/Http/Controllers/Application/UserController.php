<?php

namespace App\Http\Controllers\Application;

use App\Model\Message;
use App\Model\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{

    public function change_password(Request $request)
    {
        $validate = $this->app_validate($request->all(),
            [
                'password' => 'required|string|min:6|confirmed',

            ]
        );
        if ($validate) {
            return $validate;
        }
        $user_id = getAppUserId($request);


        $res = User::where('id', $user_id)->update([
            'password' => bcrypt($request->password),


        ]);
        if ($res) {
            return app_response(1, "رمز عبور شما با موفقیت تغییر یافت", [], [], "");

        }
        return app_response(0, "error 1", [], [], "");

    }

    public function profile(Request $request)
    {

        $user_id = getAppUserId($request);
        $user = User::find($user_id);
        return app_response(1, "message", [], $user, "");

    }

    public function modify_profile(Request $request)
    {
        $user_id = getAppUserId($request);

        $res = User::where('id', $user_id)->update([
            'fname' => $request->fname,
            'lname' => $request->lname,
            'telephone' => $request->telephone,
            'code_melli' => $request->code_melli,
            'address' => $request->address,
        ]);
        if ($res) {
            return app_response(1, "اطلاعات با موفقیت ویرایش شد", [], [], "");

        }
        return app_response(0, "error 1", [], [], "");

    }

    public function first_request_register(Request $request)
    {
        $sms_code = rand(10000, 99999);
        $validate = $this->app_validate($request->all(),
            [
                'mobile' => 'required|unique:users',
                'fname' => 'required',
                'lname' => 'required',
                'password' => 'required',
            ]
        );
        if ($validate) {
            return $validate;
        }


        $user = Message::updateOrCreate(['mobile' => $request->mobile],
            [
                'sent_count' => DB::raw('sent_count+1'),
                'mobile' => $request->mobile,
                'fname' => $request->fname,
                'lname' => $request->lname,
                'original_password' => $request->password,
                'password' => bcrypt($request->password),
                'sms_code' => $sms_code,


            ]);


        sendTextMessage($request->mobile, $sms_code);
        return app_response(200, "message", [], ["message_id" => $user->id], "");
    }


    public function userVerify(Request $request)
    {

        $user_ = Message::where('mobile', $request->mobile)->where('sms_code', $request->sms_code)->first();


        if ($user_) {

            User::updateOrCreate(
                [
                    'mobile' => $request->mobile
                ],
                [
                    'mobile' => $request->mobile,
                    'fname' => $user_->fname,
                    'lname' => $user_->lname,
                    'password' => bcrypt($request->password),
                    'sms_code' => $request->sms_code,
                    'is_active' => 1,
                    'ip' => getIP(),

                ]);


            $token = JWTAuth::attempt($request->only('mobile', 'password'));
            $user = JWTAuth::toUser($token);
            return app_response(1, 'Register success full', array(),
                [
                    'token' => $token,
                    'id' => $user->id,
                    'fname' => $user->fname,
                    'lname' => $user->lname,
                    'mobile' => $user->mobile]
            );
        } else {
            return app_response(0, 'sms code    is not correct', [], [], "");

        }
    }


    public function login(Request $request)
    {

        $credentials1['mobile'] = $request->mobile;
        $credentials1['password'] = $request->password;
        if ($token = JWTAuth::attempt($credentials1)) {
            $user = JWTAuth::toUser($token);
            return app_response(1, 'Login successfully', [], [
                'token' => $token,
                'id' => $user->id,
                'fname' => $user->fname,
                'lname' => $user->lname,
                'mobile' => $user->mobile,
            ]);
        }
        return app_response(0, 'username or password incorrect');

    }

    // when receive LOGOUT request from application  user`s  token be deactivate.
//وقتی درخواست خروج از حساب کاربری از طرف اپلیکیشن میاد توکن کاربر غیر فعال میشه.
    public function app_logout()
    {
        JWTAuth::invalidate();
        return app_response(1, 'Logged out Successfully.');
    }


}
