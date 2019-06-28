<div class="table-rep-plugin">
    <div class="table-wrapper">

        <div class="table-responsive">
            <table id="data-table" class="table table-hover">
                <thead class="thead-default">
                <tr>
                    <th>کد</th>
                    <th>نام و نام خانوادگی</th>
                    <th>نوع درخواست</th>
                    <th>استان</th>
                    <th> شهر</th>
                    <th> زمان بازدید</th>
                    <th> زمان ثبت</th>

                </tr>
                </thead>

                <tbody>
                <?php  $x = 0?>
                @foreach($user_request as $datum)
                    <tr>
                        <td>{{++$x}}</td>
                        <td>{{$datum->user->fname." ".$datum->user->lname}}<br/>{{$datum->user->mobile}}</td>
                        <td>{{$datum->request_type->title}}</td>
                        <td>{{$datum->state}}</td>
                        <td>{{$datum->city}}</td>
                        <td>{{$datum->date}}</td>
                        <td>{{$datum->created_at}}</td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>

</div>


{{--{{$data->appends($_GET)->links()}}--}}



