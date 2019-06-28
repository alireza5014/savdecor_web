<?php

namespace App\Http\Controllers\Application;

use App\Model\Sample;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SampleController extends Controller
{
    public function samples($service_id)
    {
      return Sample::where('service_id',$service_id)->paginate(200);
   }
}
