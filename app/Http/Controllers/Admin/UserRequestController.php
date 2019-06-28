<?php

namespace App\Http\Controllers\Admin;


use App\Http\Controllers\Controller;
use App\Model\UserRequest;


class UserRequestController extends Controller
{
    public function list()
    {
         $user_request = UserRequest::with('request_type')
             ->with('user')
            ->orderBy('id', 'DESC')
            ->get();

        return view('admin.user_request.list', compact('user_request'));

    }
}
