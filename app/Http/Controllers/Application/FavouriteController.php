<?php

namespace App\Http\Controllers\Application;

use App\Model\Favourite;
use App\Model\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Mockery\Exception;

class FavouriteController extends Controller
{
    public function favourite(Request $request)
    {

        $user_id = getAppUserId($request);
        $star = Favourite::where('user_id', $user_id)
            ->where("is_favourite", 1)
            ->get();
        return Product::whereIn('id', $star->pluck('product_id'))->paginate(100);

    }

    public function make_favourite(Request $request)
    {
        try {
            $user_id = getAppUserId($request);
            $res = Favourite::updateOrCreate(
                [
                    'user_id' => $user_id,
                    'product_id' => $request->product_id
                ],
                [
//                "is_favourite" => DB::raw("is_favourite * -1")
                    "is_favourite" => $request->is_favourite

                ]);
        } catch (Exception $exception) {
            return app_response(0, "OKAY_____");

        }


        return app_response(1, "OKAY" );
    }
}
