<?php

namespace App\Http\Controllers\Admin;

use App\classes\UpLoad;
use App\Model\Sample;
use App\Model\Service;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mockery\Exception;

class SampleController extends Controller
{
    public function list()
    {
        $data = Service::with('samples')->get();
        return view('admin.samples.list', compact('data'));
    }
    public function modify(Request $request)
    {

        $store_path = '/images/samples/';

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
            Sample::where('id', $request->id)->update(
                array_merge([
                    'title' => $request->title,
                    'service_id' => $request->service_id,
                ], $my_image)
            );
        } catch (Exception $e) {
            return back()->with('error', 'خطای ');

        }
        return back()->with('success', 'با موفقیت ویرایش شد');
    }

    public function create(Request $request)
    {


        $store_path = '/images/sample/';
        $image_path = '';
        if($request->main_image!=null) {
            $image = UpLoad::create('image')
                ->request($request)
                ->target('main_image')
                ->store_path($store_path)
//            ->watermark_path('watermark_logo.png')
//            ->resizePercentage(80)
//            ->resize_percent(75)
                ->makeUpload();
            $image_path=$image['image_path'][0];
        }
        try {
            Sample::create([
                'title' => $request->title,
                'service_id' => $request->service_id,
                'image_path' => $image_path,

            ]);
        } catch (Exception $exception) {
            return back()->with('error', 'خطای ');

        }
        return back()->with('success', 'با موفقیت ثبت شد');

    }
}
