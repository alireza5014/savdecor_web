@extends('layouts.material.layout')
@section('header')
    @parent

    <title> لیست اجناس </title>
    <link rel="stylesheet" type="text/css" href="{{url('crop/css/style.css')}}"/>
    {{--    <link rel="stylesheet" type="text/css" href="{{url('crop/css/style-example.css')}}"/>--}}
    <link rel="stylesheet" type="text/css" href="{{url('crop/css/jquery.Jcrop.css')}}"/>

    <script type="text/javascript" src="{{url('crop/scripts/jquery.Jcrop.js')}}"></script>
    <script type="text/javascript" src="{{url('crop/scripts/jquery.SimpleCropper.js')}}"></script>

@endsection
@section('content')
    <!-- Small -->
    <div class="modal fade" id="new-small" tabindex="-1">
        <div class="modal-dialog modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title pull-left"></h5>
                </div>
                <form id="form" class="form-horizontal" method="POST"
                      action=""
                      enctype="multipart/form-data"
                >
                    <div class="modal-body">

                        {{csrf_field()}}
                        <input name="id"  type="hidden" id="id">

                        <div class="col-sm-12">
                            <div class="form-group form-group--float">
                                <input id="title" type="text" class="form-control" name="title"
                                       value="" placeholder="" required>
                                <label> عنوان </label>
                                <i class="form-group__bar"></i>

                            </div>

                        </div>


                        <div class="col-sm-12">
                            <div class="form-group form-group--float">
                                <input id="unit" type="text" class="form-control" name="unit"
                                       value="" placeholder="" required>
                                <label> واحد </label>
                                <i class="form-group__bar"></i>

                            </div>

                        </div>


                        <div class="form-group">

                            <div class="col-md-12">
                                {{--<input type="file" class="form-control" name="main_image" id="main_image" required>--}}
                                <p class="text-center btn btn-info btn-block" id="form_image_preview"> انتخاب فایل
                                    تصویر </p>
                                <textarea style="display: none;" id="main_image" name="main_image"></textarea>
                            </div>

                            <script>
                                // Init Simple Cropper
                                // $('#form_image_preview').simpleCropper(400, 400, 180, 180);
                                $('#form_image_preview').simpleCropper(800, 400, 200, 200);

                            </script>
                        </div>


                    </div>

                    <div class="modal-footer">
                        <button type="submit" id="view_request_btn" class="btn   btn-block btn-primary  ">
                            ذخیره
                            <i style="display: none" id="loader40" class="fa fa-spinner fa-spin "></i>

                        </button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">بستن</button>
                    </div>
                </form>

            </div>

        </div>
    </div>


    <div class="col-md-12">


        <div class="card">
            <header class="content__title">
                <h2>لیست اجناس</h2>

                <div class="actions">
                    <button onclick="setNewModal()" class="btn btn-success btn-xs" data-toggle="modal"
                            data-target="#new-small">جدید
                    </button>

                </div>
            </header>


            <div class="card-block">

                <div class="row stats">
                    @foreach($services as $service)
                        <div class="col-sm-6 col-md-3">
                            <div class="stats__item">


                                <div class="profile__img">
                                    <img src="{{url($service->image_path)}}"/>
                                </div>

                                <header class="content__title">
                                    <h5>{{$service->title}}</h5>

                                    <div class="actions">

                                        <div class="dropdown actions__item">
                                            <i data-toggle="dropdown" class="zmdi zmdi-more-vert"></i>
                                            <div class="dropdown-menu dropdown-menu-left">
                                                <a onclick="setEditModal('{{$service->id}}','{{$service->title}}','{{$service->unit}}','{{$service->image_path}}')"
                                                   class="dropdown-item" data-toggle="modal" data-target="#new-small">ویرایش</a>


                                            </div>
                                        </div>
                                    </div>
                                </header>

                            </div>
                        </div>

                    @endforeach

                </div>

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


    <script>

        function setEditModal(id, title, unit, image_path) {
            var image_link = "http://"+location.hostname + data.image_path

            $('#id').val(id);
            $('#title').val(title);
            $('#unit').val(unit);
            $('#form_image_preview').append("<img width='280' height='200' src=" + image_link + " />");
            $('#form').attr('action', '{{route('service.modify')}}');


        }

        function setNewModal() {

            $('#id').val("");
            $('#title').val("");
            $('#unit').val("");
            $('#form_image_preview').append("");

            $('#form').attr('action', '{{route('service.create')}}');
        }
    </script>

@stop