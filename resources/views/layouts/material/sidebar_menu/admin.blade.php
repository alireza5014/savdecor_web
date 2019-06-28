<div class="scrollbar-inner card">
    <div class="user">
        <div class="user__info" data-toggle="dropdown">
            <img class="user__img" src="{{$path}}/demo/img/profile-pics/8.jpg" alt="">
            <div>
                <div class="user__name">{{auth($guard)->user()->fname." ".auth($guard)->user()->lname}}    </div>
                <div class="user__email">{{auth($guard)->user()->email}}</div>
            </div>
        </div>

        <div class="dropdown-menu">
            <a class="dropdown-item" href="{{route('admin.profile')}}">مشاهده
                پروفایل</a>

            <a class="dropdown-item" href="{{route('admin.getLogout')}}"> خروج</a>
        </div>
    </div>


    <ul class="navigation">
        <li class="navigation__active"><a href="{{url('admin/home')}}"><i class="zmdi zmdi-home"></i> میز کار</a></li>
        <li class="navigation__active"><a href="{{route('service.list')}}"><i class="zmdi zmdi-home"></i> لیست اجناس</a>
        </li>
        <li class="navigation__active"><a href="{{route('sample.list')}}"><i class="zmdi zmdi-home"></i> لیست نمونه
                ها</a></li>

        <li class="navigation__sub @@variantsactive">
            <a><i class="zmdi zmdi-account"></i> کاربران </a>

            <ul>
                <li class="@@sidebaractive"><a href="{{route('user.new')}}">ایجاد کاربر جدید</a></li>
                <li class="@@sidebaractive"><a href="{{route('user.list')}}">لیست کاربران</a></li>

            </ul>
        </li>


        <li class="navigation__sub @@variantsactive">
            <a><i class="zmdi zmdi-shopping-basket"></i> محصولات </a>

            <ul>
                <li class="@@sidebaractive"><a href="{{route('product.list',['name'=>""])}}"> همه محصولات  </a></li>

                @foreach(\App\Model\Service::all() as $service)
                    <li class="@@sidebaractive"><a href="{{route('product.list',['name'=>$service->id])}}"> {{$service->title}}  </a></li>

                @endforeach


            </ul>
        </li>

        <li class="navigation__active"><a href="{{url('')}}"><i class="zmdi zmdi-text-format"></i> پیام های کاربران</a>
        </li>


        <li class="navigation__active"><a href="{{route('order.list')}}"><i class="zmdi zmdi-crop-original"></i> لیست
                سفارشات</a></li>
        <li class="navigation__active"><a href="{{route('request.list')}}"><i class="zmdi zmdi-format-paint"></i>
                درخواست های نصاب</a></li>
        <li class="navigation__active"><a href="{{url('')}}"><i class="zmdi zmdi-settings"></i> تنظیمات</a></li>

    </ul>


</div>
