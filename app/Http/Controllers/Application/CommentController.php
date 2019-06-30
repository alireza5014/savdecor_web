<?php

namespace App\Http\Controllers\Application;

use App\Model\Comment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mockery\Exception;

class CommentController extends Controller
{
    public function comments($id)
    {
        $data = [];
        try {
            $data = Comment::with(['user' => function ($q) {
                return $q->select('id', 'fname', 'lname','image_path');
            }])
                ->where('product_id', $id)
//                ->where('is_published', 1)
                ->orderBy('id', 'DESC')
                ->paginate(200);
        } catch (Exception $exception) {

        }
        return $data;

    }


    public function create(Request $request)
    {

        try {
            $user_id = getAppUserId($request);

            Comment::create([
                'user_id' => $user_id,
                'product_id' => $request->product_id,
                'message' => $request->message,
                'reply_id' => $request->reply_id,
            ]);
        } catch (Exception $exception) {
            return app_response(0, "خطا در ثبت نظر");

        }
        return app_response(1, "نظر شما با موفقیت ثبت شد . بعد از تایید مدیر به نمایش گذاشته خواهد شد.");

    }

}
