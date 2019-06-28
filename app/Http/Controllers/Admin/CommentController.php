<?php

namespace App\Http\Controllers\Admin;

use App\Model\Comment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CommentController extends Controller
{
    public function list($id)
    {

         $comments = Comment::where('product_id', $id)
             ->with('user')
             ->with('product')
             ->get();
        return view('admin.products.comments.list', compact('comments'));
    }
}
