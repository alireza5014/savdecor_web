@extends('layouts.material.layout')
@section('header')
    @parent

    <title> لیست محصولات </title>
    <link rel="stylesheet" type="text/css" href="{{url('crop/css/style.css')}}"/>
    {{--    <link rel="stylesheet" type="text/css" href="{{url('crop/css/style-example.css')}}"/>--}}
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
                      action="{{route('product.create')}}"
                      enctype="multipart/form-data"
                >
                    <div class="modal-body">
                        <input id="id" name="id" type="hidden"/>
                        {{csrf_field()}}

                        <div class="row">

                            <div class="col-sm-6">
                                <div class="form-group form-group--float form-group--centered">
                                    <select onchange="getSamples('')" id="service_id" type="text" class="form-control"
                                            name="service_id" required>
                                        <option value=""></option>
                                        @foreach($services as $service)
                                            <option value="{{$service->id}}">{{$service->title}}</option>
                                        @endforeach
                                    </select>
                                    <label> نوع جنس </label>
                                    <i class="form-group__bar"></i>

                                </div>

                            </div>


                            <div class="col-sm-6">
                                <div class="form-group form-group--float form-group--centered">
                                    <select id="sample_id" type="text" class="form-control" name="sample_id" required>
                                    </select>
                                    <label> نمونه </label>
                                    <i class="form-group__bar"></i>

                                </div>

                            </div>


                            <div class="col-sm-6">
                                <div class="form-group form-group--float form-group--centered">
                                    <input id="code" type="text" class="form-control" name="code"
                                           value="" placeholder="کد" required>
                                    {{--<label> کد </label>--}}
                                    <i class="form-group__bar"></i>

                                </div>

                            </div>


                            <div class="col-sm-6">
                                <div class="form-group form-group--float form-group--centered">
                                    <input id="title" type="text" class="form-control" name="title"
                                           value="" placeholder="عنوان" required>
                                    {{--<label> عنوان </label>--}}
                                    <i class="form-group__bar"></i>

                                </div>

                            </div>


                            <div class="col-sm-6">
                                <div class="form-group form-group--float form-group--centered">
                                    <input id="price" type="text" class="form-control" name="price"
                                           value="" placeholder=" قیمت (تومان)" required>
                                    {{--<label> قیمت (تومان) </label>--}}
                                    <i class="form-group__bar"></i>

                                </div>

                            </div>

                            <div class="col-sm-6">
                                <div class="form-group form-group--float form-group--centered">
                                    <input id="count" type="text" class="form-control" name="count"
                                           value="100" placeholder="تعداد" required>
                                    {{--<label> تعداد </label>--}}
                                    <i class="form-group__bar"></i>

                                </div>

                            </div>
                            <div class="col-sm-6">
                                <div class="form-group form-group--float form-group--centered">
                                    <select id="country" type="text" class="form-control" name="country"
                                           required>
                                        <option value=""></option>
                                        <option value="چین">چین</option>
                                        <option value="کره">کره</option>
                                        <option value="آلمان">آلمان</option>
                                        <option value="ترکیه">ترکیه</option>
                                        <option value="ایران">ایران</option>

                                    </select>
                                    <label> کشور سازنده </label>
                                    <i class="form-group__bar"></i>

                                </div>

                            </div>

                            <div class="col-sm-6">
                                <div class="form-group form-group--float form-group--centered">
                                    <input id="brand" type="text" class="form-control" name="brand"
                                           value="" placeholder="برند" required>
                                    {{--<label> برند </label>--}}
                                    <i class="form-group__bar"></i>

                                </div>

                            </div>

                            <div class="col-sm-6">
                                <div class="form-group form-group--float form-group--centered">
                                    <input id="size" type="text" class="form-control" name="size"
                                           value="" placeholder="اندازه" required>
                                    {{--<label> اندازه </label>--}}
                                    <i class="form-group__bar"></i>

                                </div>

                            </div>

                            <div class="col-sm-6">
                                <div class="form-group form-group--float form-group--centered">
                                    <input id="discount" type="" class="form-control" name="discount"
                                           value="" placeholder="تخفیف (درصد)" required>
                                    {{--<label> تخفیف (درصد) </label>--}}
                                    <i class="form-group__bar"></i>

                                </div>

                            </div>

                            <div class="col-sm-12">
                                <div class="form-group form-group--float form-group--centered">
                                <textarea rows="12" id="description" type="text" class="form-control" name="description"
                                          placeholder="توضیحات"></textarea>
                                    {{--<label> description </label>--}}
                                    <i class="form-group__bar"></i>

                                </div>

                            </div>


                            <div class="col-md-12">
                                {{--<input type="file" class="form-control" name="main_image" id="main_image" required>--}}
                                <p class="text-center btn btn-info btn-block" id="form_image_preview"> انتخاب فایل
                                    تصویر </p>
                                <textarea style="display: none;" id="main_image" name="main_image"></textarea>
                            </div>

                            <script>
                                // Init Simple Cropper
                                $('#form_image_preview').simpleCropper(400, 600, 160, 170);
                            </script>


                        </div>

                        <div class="modal-footer">
                            <button type="submit" id="view_request_btn" class="btn   btn-block btn-primary  ">
                                ذخیره
                                <i style="display: none" id="loader40" class="fa fa-spinner fa-spin "></i>

                            </button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">بستن</button>
                        </div>

                    </div>

                </form>

            </div>

        </div>
    </div>



    <div class="col-md-12">

        <div class="card">

            <header class="content__title">
                <h2>لیست محصولات</h2>

                <div class="actions">
                    <button onclick="setNewModal()" class="btn btn-success btn-xs" data-toggle="modal"
                            data-target="#modal-small">ایجاد محصول
                        جدید
                    </button>

                </div>
            </header>
            <div class="card">

                <div class="card-block">
                    <div class="row quick-stats">
                        @foreach(\App\Model\Service::all() as $service)
                            <a    href="{{route('product.list',['name'=>$service->id])}}" class="col-sm-4 col-md-2">
                                <div @if($service->id==Request::route('name')) style="background-color: #1dbc71 !important;"  @endif class="quick-stats__item bg-info">
                                    <div class="quick-stats__info">

                                        <small > {{$service->title}}</small>
                                    </div>

                                </div>
                            </a>
                        @endforeach


                    </div>
                </div>
            </div>

            <div class="card-block">


                @include('admin.products.table')

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


        $("#service_id").change(function () {

            var id = $(this).val();

            getSamples(id);

        });

        $("#sample_id").change(function () {

          $("#brand").val($("#sample_id option:selected").text());

        });


        function getSamples(id) {

            $.get("{{url('admin/product/getSamples')}}/" + id, function (data) {

                $city = $('select#sample_id option').remove();
                $('select#sample_id').append('<option value="1"   >بدون نوع</option>');

                $.each(data, function (index, element) {


                    $('select#sample_id').append('<option value="' + element.id + '"   >' + element.title + '</option>');


                });
            }, 'json');

        }


        function setEditModal(data) {
            var data = JSON.parse(data);
            var image_link = "http://"+location.hostname + data.image_path
            $('#id').val(data.id);
            $('#code').val(data.code);
            $('#title').val(data.title);
            $('#price').val(data.price_web);
            $('#count').val(data.count);
            $('#country').val(data.country);
            $('#brand').val(data.brand);
            $('#size').val(data.size);
            $('#discount').val(data.discount);
            $('#description').val(data.description_web);

            $('#form_image_preview').append("<img width='280' height='200' src=" + image_link + " />");
            $('#form').attr('action', '{{route('product.modify')}}');


        }

        function setNewModal() {

            $('#id').val("");
            $('#code').val("");
            $('#title').val("");
            $('#price').val("");
            $('#count').val(100);
            $('#country').val("");
            $('#brand').val("");
            $('#size').val("");
            $('#discount').val("");
            $('#description').val("");

            $('#form_image_preview').append("");

            $('#form').attr('action', '{{route('product.create')}}');
        }

    </script>

@stop