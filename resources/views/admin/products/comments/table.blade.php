<div class="table-rep-plugin">
    <div class="table-wrapper">

        <div class="table-responsive">
            <table id="data-table" class="table table-hover">
                <thead class="thead-default">
                <tr>
                    <th>#</th>
                    <th>محصول</th>

                    <th>کاربر</th>

                    <th>متن نظر</th>

                    <th> زمان</th>
                    <th> مدیریت</th>

                </tr>
                </thead>

                <tbody>
                @foreach($comments as $datum)
                    <tr>
                        <td>{{$datum->id}}</td>
                        <td>
                            <img src="{{url($datum->product->image_path)}}" width="80px" /><br/>
                            {{$datum->product->code}}<br/>
                            {{$datum->product->title}}<br/>
                        </td>
                        <td>
                            {{$datum->user->fname." ".$datum->user->lname}}<br/>
                            {{$datum->user->mobile}}<br/>


                        </td>
                        <td>{{$datum->message}}</td>
                        <td>{{$datum->created_at}}</td>
                        <td>{{publish($datum->is_published)}}</td>


                    </tr>


                @endforeach
                </tbody>
            </table>
        </div>
    </div>

</div>


{{--{{$data->appends($_GET)->links()}}--}}



