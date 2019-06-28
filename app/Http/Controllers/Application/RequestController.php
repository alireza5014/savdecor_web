<?php

namespace App\Http\Controllers\Application;

use App\Model\Request_type;
use App\Model\UserRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mockery\Exception;

class RequestController extends Controller
{
    public function request_type()
    {
        $data = Request_type::where('is_active', 1)->get();
        return app_response(1, "success fully insert request", [],$data);

    }

    public function my_requests(Request $request)
    {
        $user_id = getAppUserId($request);
        $my_requests = UserRequest::where('user_id', $user_id)->with('request_type')->paginate(100);
        return $my_requests;
    }

    public function make_request(Request $request)
    {

        $validate = $this->app_validate($request->all(),
            [

                'request_type_id' => 'required',
                'state' => 'required',
                'city' => 'required',
                'description' => 'required',
//                'date' => 'required',
            ]
        );
        if ($validate) {
            return $validate;
        }

        try {
            $user_id = getAppUserId($request);

            UserRequest::create([
                'user_id' => $user_id,
                'request_type_id' => $request->request_type_id,
                'state' => $request->state,
                'city' => $request->city,
                'description' => $request->description,
                'date' => $request->date,
            ]);

        } catch (Exception $exception) {
            return app_response(0, "Error", [$exception->getMessage()]);

        }

        return app_response(1, "success fully insert request");

    }
}
