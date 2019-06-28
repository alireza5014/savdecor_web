<div class="table-rep-plugin">
    <div class="table-wrapper">

        <div class="table-responsive">
            <table id="data-table" class="table table-hover">
                <thead class="thead-default">
                <tr>
                    <th>#</th>
                    <th> نام محصول</th>


                    <th> نام و نام خانوادگی</th>

                    <th> جمع کل (تومان)</th>

                    <th> وضعیت</th>
                    <th> زمان</th>
                    {{--<th> مدیریت</th>--}}

                </tr>
                </thead>

                <tbody>
                <?php  $x=0;?>
                @foreach($orders as $datum)
                    <tr>
                        <td>{{++$x}}</td>

                        <td>
                            @foreach($datum->products as $product)
                                <img src="{{url($product->image_path)}}" width="80px"/>
                                <p>{{$product->code}}---{{$product->title}}</p>
                            @endforeach

                        </td>

                        <td> {{$datum->user->fname." ".$datum->user->lname}}<br/>
                            {{$datum->user->mobile}}
                        </td>

                        <td>{{number_format($datum->total_price)}}</td>

                        <td>{{order_status($datum->status)}}</td>
                        <td>{{$datum->created_at}}</td>


                    </tr>


                @endforeach
                </tbody>
            </table>
        </div>
    </div>

</div>


{{$orders->appends($_GET)->links()}}



