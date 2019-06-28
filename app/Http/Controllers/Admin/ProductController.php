<?php

namespace App\Http\Controllers\Admin;

use App\classes\UpLoad;
use App\Model\Product;
use App\Model\Sample;
use App\Model\Service;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Mockery\Exception;

class ProductController extends Controller
{


    public function publish($id)
    {

        try {
            $product = Product::select('is_published')->find($id);
            Product::where('id', $id)->update(['is_published' => -$product->is_published]);
            return response()->json(
                [
                    'status' => 1,
                    'message' => 'my message',
                    'is_published' => $product->is_published * -1,
                ]
                , 200
            );
        } catch (\Exception $e) {

        }

    }


    public function list(Request $request)
    {
        $type = $request->name;

        $services = Service::get();
        $products = Product::with(['service' => function ($q) {
            return $q->select('id', 'title');
        }])->with(['sample' => function ($q) {
            return $q->select('id', 'title');
        }]);

        if ($type != "") {
            $products->where('service_id', $type);
        }
        $products = $products
            ->select('id', 'sample_id', 'service_id', 'code', 'image_path', 'title', 'price as price_web', 'count', 'country', 'brand', 'size', 'discount', 'description as description_web','is_published', 'created_at', 'updated_at')
           ->orderBy('id','DESC')
            ->get();
        return view('admin.products.list', compact('products', 'services'));
    }


    public function modify(Request $request)
    {

        $store_path = '/images/product/';

        $my_image = array();
        if ($request->main_image != "") {
            $image = UpLoad::create('image')
                ->request($request)
                ->target('main_image')
                ->store_path($store_path)
//            ->watermark_path('watermark_logo.png')
//            ->resizePercentage(80)
//            ->resize_percent(75)
                ->makeUpload();
            $my_image = ['image_path' => $image['image_path'][0]];
        }


        try {
            Product::where('id', $request->id)->update(
                array_merge([
                    'service_id' => $request->service_id,
                    'sample_id' => $request->sample_id,

                    'code' => $request->code,
                    'title' => $request->title,
                    'price' => $request->price,
                    'count' => $request->count,
                    'discount' => $request->discount,
                    'brand' => $request->brand,
                    'country' => $request->country,
                    'size' => $request->size,
                    'description' => $request->description,
                ], $my_image)
            );
        } catch (Exception $e) {
            return back()->with('error', 'خطای ');

        }
        return back()->with('success', 'با موفقیت ویرایش شد');
    }


    public function create(Request $request)
    {


        $store_path = '/images/product/';
        $image = UpLoad::create('image')
            ->request($request)
            ->target('main_image')
            ->store_path($store_path)
//            ->watermark_path('watermark_logo.png')
//            ->resizePercentage(80)
//            ->resize_percent(75)
            ->makeUpload();
        try {
            Product::create([
                'service_id' => $request->service_id,
                'sample_id' => $request->sample_id,
                'image_path' => $image['image_path'][0],

                'code' => $request->code,
                'title' => $request->title,
                'price' => $request->price,
                'count' => $request->count,
                'discount' => $request->discount,
                'brand' => $request->brand,
                'country' => $request->country,
                'size' => $request->size,
                'description' => $request->description,
            ]);
        } catch (Exception $e) {
            return back()->with('error', 'خطای ');

        }
        return back()->with('success', 'با موفقیت ثبت شد');


    }

    public function getSamples($id)
    {
        $samples = Sample::where('service_id', $id)->get();
        return $samples;
    }
}
