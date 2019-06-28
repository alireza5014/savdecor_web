<?php

namespace App\Http\Controllers\Admin;

use App\Model\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    public function list()
    {
         $orders = Order::with('user')->with('products')
             ->orderBy('id','DESC')
            ->paginate(200);
        return view('admin.orders.list', compact('orders'));
    }
}



