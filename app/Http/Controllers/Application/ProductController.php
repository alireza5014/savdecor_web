<?php

namespace App\Http\Controllers\Application;

use App\Model\Favourite;
use App\Model\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;

class ProductController extends Controller
{


    public function products()
    {
        $orderBY = Input::get('orderBy', 'ASC');
        $search = Input::get('search', '');
        $sample_id = Input::get('sample_id', 0);
        $service_id = Input::get('service_id', 0);

        $query = Product::where('is_published',1)->orderBy('id', $orderBY);
        if ($search != '') {
            $query->where("title", "LIKE", "%$search%");

        }
        if ($sample_id != 0) {
            $query->where("sample_id", "=", $sample_id);

        }
        if ($service_id != 0) {
            $query->where("service_id", "=", $service_id);

        }
        return $query->paginate(100);
    }


    public function product_detail($id)
    {
          $products = Product::where('id', $id)->withCount(["favourite" => function ($q) {
            $q->where('is_favourite', 1);
        }])->first();
        $similar_product = Product::where('service_id', $products->service_id)->inRandomOrder()->limit(10)->get();
        $custom = collect($products);
        $data = $custom->merge(['similar_product' => $similar_product]);
        return response()->json($data);

    }


}


