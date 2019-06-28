<?php

namespace App\Http\Controllers\Application;

use App\Model\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function my_order(Request $request)
    {

        $user_id = getAppUserId($request);

        $order = Order::with(['products' => function ($q) {
            $q->orderBy('id', 'DESC');
        }])
            ->where('user_id', $user_id)
            ->where('status', $request->status);
        if ($request->status == 0) {
            return $order->first();
        }
        return $order->paginate(100);
    }

    public function delete(Request $request)
    {

        $user_id = getAppUserId($request);

        $res = Order::where('user_id', $user_id)->where('status', 0)->first();
        $res->products()->detach($request->product_id);
        if ($res)
            return app_response(1, "DELETED");
        else
            return app_response(0, "not DELETED");

    }

    public function add_to_card(Request $request)
    {

        $user_id = getAppUserId($request);


        $res = Order::where('user_id', $user_id)->firstOrCreate(['status' => 0], ['user_id' => $user_id]);
//        $res = Order::where('user_id', $user_id)->where('status', 0)->first();
        $res->products()->attach($request->product_id, ['count' => $request->count]);
        if ($res)
            return app_response(1, "attached");
        else
            return app_response(0, "not attached");

    }

    public function change_product_count(Request $request)
    {

        $user_id = getAppUserId($request);


        $res = Order::where('user_id', $user_id)->firstOrCreate(['status' => 0], ['user_id' => $user_id]);
//        $res = Order::where('user_id', $user_id)->where('status', 0)->first();
        $res->products()->detach($request->product_id, ['count' => $request->count]);
        $res->products()->attach($request->product_id, ['count' => $request->count]);
        if ($res)
            return app_response(1, "attached++");
        else
            return app_response(0, "not attached+++");

    }

    public function final_buy(Request $request)
    {
        $user_id = getAppUserId($request);
        $res = Order::where('user_id', $user_id)->where('status', 0)->update(['status' => 1]);

        if ($res)
            return app_response(1, "final buy successfully");
        else
            return app_response(0, "not final");
    }
}
