<?php

namespace App\Http\Controllers\Admin;

use App\classes\UpLoad;
use App\Model\Service;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mockery\Exception;

class ServiceController extends Controller
{
    public function list()
    {
        $services = Service::get();
        return view('admin.services.list', compact('services'));
    }

    public function create(Request $request)
    {

        $store_path = '/images/service/';

        $image = UpLoad::create('image')
            ->request($request)
            ->target('main_image')
            ->store_path($store_path)
//            ->watermark_path('watermark_logo.png')
//            ->resizePercentage(80)
//            ->resize_percent(75)
            ->makeUpload();


        try {
            Service::create([
                'title' => $request->title,
                'unit' => $request->unit,
                'image_path' => $image['image_path'][0],
            ]);
        } catch (Exception $e) {
            return back()->with('error', 'خطای ');

        }
        return back()->with('success', 'با موفقیت ثبت شد');
    }


    public function modify(Request $request)
    {

        $store_path = '/images/service/';

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
            Service::where('id', $request->id)->update(
                array_merge([
                    'title' => $request->title,
                    'unit' => $request->unit,
                ], $my_image)
            );
        } catch (Exception $e) {
            return back()->with('error', 'خطای ');

        }
        return back()->with('success', 'با موفقیت ویرایش شد');
    }
}
