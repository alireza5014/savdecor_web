@extends('layouts.material.layout')
@section('header')
    @parent

    <title> لیست درخواست های کاربران </title>

@endsection
@section('content')
    <!-- Small -->


    <div class="col-md-12">


        <div class="card">
            <header class="content__title">
                <h2> لیست درخواست های کاربران  </h2>

            </header>


            <div class="card-block">

                @include('admin.user_request.table')

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