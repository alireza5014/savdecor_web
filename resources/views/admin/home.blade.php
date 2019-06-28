@extends('layouts.material.layout')

@section('header')

    <title>داشبورد</title>
    @parent
@endsection
@section('content')



    <div class="card">
<div class="card-block">
    <div class="row">
        @foreach($data as $key=>$value)

            <div class="col-sm-6 col-md-4">
                <div class="quick-stats__item bg-light-blue">
                    <div class="quick-stats__info">
                        <h3>{{convert_to_digit($value)}}</h3>
                        <h5 class="text-white"> {{$key}}</h5>
                    </div>

                    <div class="quick-stats__chart sparkline-bar-stats">3,5</div>
                </div>
            </div>




        @endforeach

    </div><!-- end col -->

</div>

    </div>





@stop

@section('footer')
    @parent

@endsection

