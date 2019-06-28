<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Validator;


class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function app_validate($request, $parameters)
    {
        $validator = Validator::make($request, $parameters);
        if ($validator->fails()) {
            $my_error = [];
            foreach ($validator->errors()->all() as $error) {
                $my_error[] = $error;
            }
           return app_response(0, '', $my_error);

//            return ['hasError' => true, 'errors' => $my_error];
        }
    }
}
