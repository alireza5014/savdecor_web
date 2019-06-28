<div class="table-rep-plugin">
    <div class="table-wrapper">

        <div class="table-responsive">
            <table id="data-table" class="table table-hover">
                <thead class="thead-default">
                <tr>
                    <th>کد</th>

                    <th>تصویر</th>

                    <th>جنس</th>

                    <th>عنوان</th>
                    <th> اندازه</th>

                    <th> قیمت (تومان)</th>
                    <th> تعداد موجود</th>
                    <th> تخفیف</th>

                    <th>کشور/ برند</th>
                    <th> زمان</th>
                    <th> مدیریت</th>

                </tr>
                </thead>

                <tbody>
                @foreach($products as $datum)
                    <tr>
                        <td>{{$datum->code}}</td>

                        <td><img src="{{url($datum->image_path)}}" width="80px"></td>
                        <td>
                            <b class="btn btn-xs btn-info">{{$datum->service->title}}</b><br/>
                            <code>{{$datum->sample->title}}</code>

                        </td>
                        <td>{{$datum->title}}</td>
                        <td>{{$datum->size}}</td>

                        <td>{{$datum->price}}</td>
                        <td>{{$datum->count}}</td>
                        <td>{{$datum->discount}}</td>
                        <td>
                            {{$datum->country}}<br/>
                            {{$datum->brand}}


                        </td>
                        <td>
                            <a id="publish_{{$datum->id}}"
                               class="btn btn-xs btn-default"
                               onclick="publish1({{$datum->id}})" >

                                <i class="zmdi zmdi-check @if($datum->is_published==1) text-success @else  text-danger @endif"> </i>

                                <p>
                                    @if($datum->is_published==1)  منتشر شده @else    منتشر نشده @endif</p>

                                <i style="display: none" id="loader{{$datum->id}}"
                                   class="zmdi zmdi-spinner fa-spin "></i>
                            </a>
                        </td>
                        <td>{{$datum->created_at}}</td>


                        <td><a onclick="setEditModal('{{$datum}}')" class="btn  btn-xs btn-info" data-toggle="modal"
                               data-target="#modal-small">ویرایش</a>
                            <a href="{{url("admin/product/delete")."/".$datum->id}}"
                               class="btn btn-xs btn-danger">حذف</a>
                            <a href="{{url("admin/product/comment")."/".$datum->id}}" class="btn btn-xs btn-primary">نظرات
                                کاربران</a>
                        </td>


                    </tr>


                @endforeach
                </tbody>
            </table>
        </div>
    </div>

</div>
<script>
    function publish1(id) {

        event.preventDefault();
        $('#loader' + id).show();

        $.ajax({
            url: 'publish/' + id,
            success: function (data) {


                if (data.status) {
                    $('#loader' + id).hide();

                    var status;
                    (data.is_published === 1) ? status = [['text-success', 'منتشر شده'], ['text-danger', 'منتشر نشده']] : status = [['text-danger', 'منتشر نشده'], ['text-success', 'منتشر شده']];
                    $('#publish_' + id).children("i").addClass(status[0][0]).removeClass(status[1][0]);
                    $('#publish_' + id).children("p").text(status[0][1])

                }



            }

        });

    }
</script>
{{--{{$data->appends($_GET)->links()}}--}}



