@extends('layouts.material.layout')
@section('header')
    @parent

    <title> لیست نمونه ها </title>
    <link rel="stylesheet" type="text/css" href="{{url('crop/css/style.css')}}"/>
    <link rel="stylesheet" type="text/css" href="{{url('crop/css/style-example.css')}}"/>
    <link rel="stylesheet" type="text/css" href="{{url('crop/css/jquery.Jcrop.css')}}"/>

    <script type="text/javascript" src="{{url('crop/scripts/jquery.Jcrop.js')}}"></script>
    <script type="text/javascript" src="{{url('crop/scripts/jquery.SimpleCropper.js')}}"></script>

@endsection
@section('content')
    <div class="modal fade" id="modal-small" tabindex="-1">
        <div class="modal-dialog modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title pull-left"></h5>
                </div>
                <form id="form" class="form-horizontal" method="POST"
                      action="{{route('sample.create')}}"
                      enctype="multipart/form-data"
                >
                    <div class="modal-body">

                        {{csrf_field()}}

                        <input name="id" id="id" type="hidden">
                        <input name="service_id" id="service_id" type="hidden">
                        <p id="my_title" class="text-center"></p>
                        <div class="col-sm-12">
                            <div class="form-group form-group--float">
                                <input id="title" type="text" class="form-control" name="title"
                                       value="" placeholder="" required>
                                <label> عنوان </label>
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
                                $('#form_image_preview').simpleCropper(400, 400, 180, 180);
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


            <div class="card-block">


                <div class="row">
                    @include('admin.samples.table')

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


        function setEditModal(data) {

            var data = JSON.parse(data);
            var image_link = "http://"+location.hostname + data.image_path

            $('#id').val(data.id);
            $('#service_id').val(data.service_id);

            $('#title').val(data.title);


            $('#form_image_preview').append("<img width='280' height='200' src=" + image_link + " />");
            $('#form').attr('action', '{{route('sample.modify')}}');


        }


        function setNewModal() {

            $('#id').val("");

            $('#title').val("");


            $('#form_image_preview').append("");

            $('#form').attr('action', '{{route('sample.create')}}');
        }

    </script>





@stop