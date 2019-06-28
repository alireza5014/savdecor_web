@extends('layouts.material.layout')
@section('header')
    @parent

    <title>لیست نظرات محصول</title>

    <link rel="stylesheet" type="text/css" href="{{url('crop/css/style.css')}}"/>
    {{--    <link rel="stylesheet" type="text/css" href="{{url('crop/css/style-example.css')}}"/>--}}
    <link rel="stylesheet" type="text/css" href="{{url('crop/css/jquery.Jcrop.css')}}"/>

    <script type="text/javascript" src="{{url('crop/scripts/jquery.Jcrop.js')}}"></script>
    <script type="text/javascript" src="{{url('crop/scripts/jquery.SimpleCropper.js')}}"></script>

@endsection
@section('content')

    <div class="col-md-12">


        <div class="card">

            <header class="content__title">
                <h2>لیست نظرات محصول</h2>


            </header>

            <div class="card-block">


                @include('admin.products.comments.table')

            </div>
        </div>
    </div>

    <script>
        $(document).ready(function () {

            $(document).on('click', '.pagination a', function (event) {
                event.preventDefault();
                $('#loader').show();
                var page = $(this).attr('href');
                fetch_data(page);
            });


        });

        function fetch_data(page) {
            $.ajax({
                url: page,
                success: function (data) {
                    $('.card-block').html(data);
                    $('#loader').hide();

                }
            });
        }

    </script>



@stop