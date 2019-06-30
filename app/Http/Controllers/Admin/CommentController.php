<?php

namespace App\Http\Controllers\Admin;

use App\Model\Comment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CommentController extends Controller
{
    public function list($id)
    {
        $count=0;
        $comments = Comment::with('user')->with('product');

        if ($id) {
            $comments->where('product_id', $id);
        }

        $comments = $comments->orderBy('id','DESC')->get();
        return view('admin.products.comments.list', compact('comments','count'));
    }
}
