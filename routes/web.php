<?php
Route::group(['namespace' => 'Site'], function () {
    Route::get('/', 'SiteController@home')->name('home');

});


Route::any('/user/verify', 'SiteController@verify')->name('user.verify');


Route::post('token_request', 'SiteController@token_request')->name('token_request');

Route::post('site/register', 'SiteController@register')->name('site_register');
Route::post('site/login', 'SiteController@login')->name('site_login');


Route::post('site/contact_form/save', 'Site\ContactFormController@save')->name('contact_form.save');


Route::get('/job/{cat_slug}', 'SiteController@categories')->name('categories');
Route::get('/job/{cat_slug}/{sub_cat_slug}', 'SiteController@sub_categories')->name('sub_categories');

Route::get('/job/{cat_slug}/{sub_cat_slug}/{job_title}', 'SiteController@job_detail')->name('job_detail');


Route::get('search', 'SiteController@job_search')->name('job_search');
Route::get('discounts', 'SiteController@discounts')->name('discounts');
Route::get('news', 'SiteController@news')->name('news');
Route::get('bests', 'SiteController@bests')->name('bests');


Route::get('free/job', 'Site\FreeJobController@free_job')->name('free_job');
Route::post('free/job/save', 'Site\FreeJobController@save')->name('free_job.save');


Route::get('getCity/{state_id}', 'SiteController@getCity')->name('getCity');
Route::get('getSubCategory/{category_id}', 'SiteController@getSubCategory')->name('getSubCategory');


Route::post('site/insert_message', 'ContactsController@save')->name('insert_message');


Route::any('telegram/action', 'Telegram\TelegramController@action')->name('action');




Route::group(['prefix' => '/admin'], function () {

    Route::get('/login', 'Auth\AdminLoginController@showLoginForm')->name('admin.login');
    Route::post('/login', 'Auth\AdminLoginController@login')->name('admin.login.submit');
    Route::get('logout/', 'Auth\AdminLoginController@logout')->name('admin.logout');


    Route::group(['middleware' => 'auth:admin', 'namespace' => 'Admin'], function () {


        /////// telegram

        Route::get('/web_hook/edit', 'Admin\TelegramController@edit_web_hook')->name('web_hook.edit');
        Route::get('/web_hook/modify}', 'Admin\TelegramController@modify_web_hook')->name('web_hook.modify');


        ////// end telegram


        Route::get('/home/1', 'AdminController@index')->name('admin.home');
        Route::get('/home', 'AdminController@index')->name('admin.dashboard');
        Route::get('/', 'AdminController@index')->name('admin.dashboard');


        Route::get('/profile', 'AdminController@profile')->name('admin.profile');
        Route::post('/modify_profile', 'AdminController@modify_profile')->name('admin.modify.profile');


//            Route::get('/', 'AdminController@index')->name('home')->middleware('can:dashboard');
        Route::get('/getLogout', 'AdminController@getLogout')->name('admin.getLogout');
        Route::get('/setting', 'AdminController@setting')->name('admin.setting');


        Route::get('/user/new', 'UserController@new')->name('user.new');




        Route::get('/user/list', 'UserController@list')->name('user.list');
        Route::get('/user/edit/{id}', 'UserController@edit')->name('user.edit');
        Route::get('/user/delete/{id}', 'UserController@delete')->name('user.delete');

        Route::post('/user/create', 'UserController@create')->name('user.create');
        Route::post('/user/modify', 'UserController@modify')->name('user.modify');


        Route::get('/product/list/{name?}', 'ProductController@list')->name('product.list');
        Route::get('/product/getSamples/{id}', 'ProductController@getSamples')->name('product.getSamples');
        Route::get('/product/publish/{id}', 'ProductController@publish')->name('product.publish');
        Route::get('/product/list/publish/{id}', 'ProductController@publish')->name('product.publish2');



        Route::get('/product/comment/{id}', 'CommentController@list')->name('comment.list');

        Route::post('/product/create', 'ProductController@create')->name('product.create');
        Route::post('/product/modify', 'ProductController@modify')->name('product.modify');



        Route::get('/order/list', 'OrderController@list')->name('order.list');



        Route::get('/service/list', 'ServiceController@list')->name('service.list');
        Route::post('/service/create', 'ServiceController@create')->name('service.create');
        Route::post('/service/modify', 'ServiceController@modify')->name('service.modify');


        Route::get('/request/list', 'UserRequestController@list')->name('request.list');




        Route::get('/sample/list', 'SampleController@list')->name('sample.list');
        Route::post('/sample/create', 'SampleController@create')->name('sample.create');
        Route::post('/sample/modify', 'SampleController@modify')->name('sample.modify');


    });


});


Route::auth();





