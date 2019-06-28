<div class="table-rep-plugin">
    <div class="table-wrapper">

        <div class="table-responsive">
            <table id="data-table" class="table table-hover">
                <thead class="thead-default">
                <tr>
                    <th>#</th>


                    <th> نام و نام خانوادگی</th>

                    <th>موبایل</th>
                    <th> آدرس</th>
                    <th> دستگاه</th>
                    <th>آی پی</th>

                    <th> وضعیت</th>
                    <th> زمان عضویت</th>
                    <th> مدیریت</th>

                </tr>
                </thead>

                <tbody>
                @foreach($data as $datum)
                    <tr>
                        <td>{{$datum->id}}</td>
                        <td> {{$datum->fname." ".$datum->lname}} </td>

                        <td>{{$datum->mobile}}</td>
                        <td>{{$datum->address}}</td>
                        <td>{{$datum->device}}</td>
                        <td>{{$datum->ip}}</td>
                        <td>{{active($datum->is_active)}}</td>
                        <td>{{$datum->created_at}}</td>
                        <td><a href="{{url("admin/user/edit")."/".$datum->id}}" class="btn btn-info">ویرایش</a>
                            <a href="{{url("admin/user/delete")."/".$datum->id}}" class="btn btn-danger">حذف</a></td>


                    </tr>


                @endforeach
                </tbody>
            </table>
        </div>
    </div>

</div>


{{$data->appends($_GET)->links()}}



