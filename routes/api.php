<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['prefix' => '', 'namespace' => 'Application'], function () {

    Route::post('first_request_register', 'UserController@first_request_register');
    Route::post('userVerify', 'UserController@userVerify');
    Route::post('login', 'UserController@login');

    Route::get('my_order', 'OrderController@my_order');



    Route::get('home', 'ServiceController@home');
    Route::get('product_list', 'ServiceController@product_list');



    Route::get('products', 'ProductController@products');

    Route::get('product/detail/{id}', 'ProductController@product_detail');


    Route::get('comments/{product_id}', 'CommentController@comments');
     Route::get('samples/{product_id}', 'SampleController@samples');


    Route::group(['middleware' => 'jwt.auth'], function () {



        Route::post('insert_comment', 'CommentController@create');


        Route::post('delete_order', 'OrderController@delete');
        Route::post('add_to_card', 'OrderController@add_to_card');
        Route::post('change_product_count', 'OrderController@change_product_count');
        Route::post('final_buy', 'OrderController@final_buy');


        Route::get('favourite', 'FavouriteController@favourite');

        Route::post('make_favourite', 'FavouriteController@make_favourite');



        Route::post('make_request', 'RequestController@make_request');
        Route::get('request_type', 'RequestController@request_type');
        Route::get('my_requests', 'RequestController@my_requests');

        Route::post('modify_profile', 'UserController@modify_profile');
        Route::get('profile', 'UserController@profile');
        Route::post('change_password', 'UserController@change_password');

    });
});



