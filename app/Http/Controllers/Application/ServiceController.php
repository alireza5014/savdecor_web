<?php

namespace App\Http\Controllers\Application;

use App\Model\Product;
use App\Model\Service;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ServiceController extends Controller
{
    public function home()
    {

        $services = Service::where('is_active', 1)
            ->select('id', 'title', 'image_path')
            ->orderBy('id', 'DESC')
            ->withCount('samples')
//            ->with(['products'=>function($q){
//                return $q->orderBy('id','DESC')->take(6);
//            }])
            ->paginate(100);

        $new_products = Product::limit(10)->orderBy('id', 'DESC')->where('discount', 0)->get();
        $discount_products = Product::limit(10)->orderBy('id', 'DESC')->where('discount', '>', 0)->get();

        $custom = collect(["new_product" => $new_products, "discount_product" => $discount_products]);
        $data = $custom->merge($services);

        return response()->json($data);


    }

    public function product_list()
    {
        return Service::where('is_active', 1)
            ->select('id', 'title')
            ->orderBy('id', 'ASC')
            ->withCount('products')

            ->paginate(100);
    }
}
