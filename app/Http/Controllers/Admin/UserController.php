<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\CreateUserRequest;
use App\Model\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function list(Request $request)
    {
        $users = User::orderBy('id', 'DESC')->paginate(20);
        return web_response($request, 'admin.users', $users);

    }

    public function new()
    {

        return view('admin.users.new');
    }

    public function create(CreateUserRequest $request)
    {

        User::create([
            'fname' => $request->fname,
            'lname' => $request->lname,
            'address' => $request->address,
            'mobile' => $request->mobile,
            'ip' => getIP(),

        ]);
        return back()->with('success', "کاربر با موفقیت ایجاد شد");
    }


    public function modify()
    {

    }
    public function edit($id)
    {$user = User::find($id);
return view("admin.users.edit",compact("user"));
    }

    public function delete($id)
    {
        User::where("id",$id)->delete();
        return back()->with("success","kjhdfhdhjfhlod");
    }
}
