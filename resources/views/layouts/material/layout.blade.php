<?php

if (auth('admin')->check()) {
    $sidebar_menu = 'layouts.material.sidebar_menu.admin';
    $guard = 'admin';
} else {
    $guard = 'user';
    $sidebar_menu = 'layouts.material.sidebar_menu.user';
}

$path = url('template/material');
?>

        <!DOCTYPE html>
<html lang="en">
<head>
    @section('header')

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Vendor styles -->
        <link rel="stylesheet" href="{{$path}}/css/material-design-iconic-font.min.css">
        <link rel="stylesheet" href="{{$path}}/css/animate.min.css">
        <link rel="stylesheet" href="{{$path}}/vendors/bower_components/jquery.scrollbar/jquery.scrollbar.css">
        <link rel="stylesheet" href="{{$path}}/vendors/bower_components/fullcalendar/dist/fullcalendar.min.css">

        <!-- App styles -->
        <link rel="stylesheet" href="{{$path}}/css/app.min.css">
        <link href="{{$path}}/css/custom.css" rel="stylesheet"/>

        <script src="{{$path}}/vendors/bower_components/jquery/dist/jquery.min.js"></script>

    @show
</head>

<body data-ma-theme="blue-grey">
<main class="main">
    <div class="page-loader">
        <div class="page-loader__spinner">
            <svg viewBox="25 25 50 50">
                <circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
            </svg>
        </div>
    </div>

    <header class="header">
        <div class="navigation-trigger hidden-xl-up" data-ma-action="aside-open" data-ma-target=".sidebar">
            <div class="navigation-trigger__inner">
                <i class="navigation-trigger__line"></i>
                <i class="navigation-trigger__line"></i>
                <i class="navigation-trigger__line"></i>
            </div>
        </div>

        <div class="header__logo hidden-sm-down">
            <h1><a href="">SavDecor</a></h1>
        </div>


        <form class="search">
            <div class="search__inner">
                <input type="text" class="search__text" placeholder="متن یا عبارت خود را برای جستجو وارد نمایید">
                <i class="zmdi zmdi-search search__helper" data-ma-action="search-close"></i>
            </div>
        </form>

    </header>
    <aside class="sidebar">

        @include($sidebar_menu)

    </aside>

    <aside class="chat">


        @include('layouts.material.chat')
    </aside>

    <section class="content">


        @yield('content')

        @include('layouts.material.footer')

    </section>

</main>

{{--<script src="//code.tidio.co/anzdmo7lio9uih04o0xjh6wrzcmhjsee.js"></script>--}}

<!-- Javascript -->
<!-- Vendors -->
{{--<script src="{{$path}}/vendors/bower_components/jquery/dist/jquery.min.js"></script>--}}
<script src="{{$path}}/vendors/bower_components/tether/dist/js/tether.min.js"></script>
<script src="{{$path}}/vendors/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="{{$path}}/vendors/bower_components/Waves/dist/waves.min.js"></script>
<script src="{{$path}}/vendors/bower_components/jquery.scrollbar/jquery.scrollbar.min.js"></script>
<script src="{{$path}}/vendors/bower_components/jquery-scrollLock/jquery-scrollLock.min.js"></script>
<script src="{{$path}}/vendors/bower_components/Waves/dist/waves.min.js"></script>

<script src="{{$path}}/vendors/bower_components/flot/jquery.flot.js"></script>
<script src="{{$path}}/vendors/bower_components/flot/jquery.flot.resize.js"></script>
<script src="{{$path}}/vendors/bower_components/flot.curvedlines/curvedLines.js"></script>
<script src="{{$path}}/vendors/bower_components/jqvmap/dist/jquery.vmap.min.js"></script>
<script src="{{$path}}/vendors/bower_components/jqvmap/dist/maps/jquery.vmap.world.js"></script>
<script src="{{$path}}/vendors/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js"></script>
<script src="{{$path}}/vendors/bower_components/salvattore/dist/salvattore.min.js"></script>
<script src="{{$path}}/vendors/jquery.sparkline/jquery.sparkline.min.js"></script>
<script src="{{$path}}/vendors/bower_components/moment/min/moment.min.js"></script>
<script src="{{$path}}/vendors/bower_components/fullcalendar/dist/fullcalendar.min.js"></script>

<!-- Charts and maps-->
<script src="{{$path}}/demo/js/flot-charts/curved-line.js"></script>
<script src="{{$path}}/demo/js/flot-charts/line.js"></script>
<script src="{{$path}}/demo/js/flot-charts/chart-tooltips.js"></script>
<script src="{{$path}}/demo/js/other-charts.js"></script>
<script src="{{$path}}/demo/js/jqvmap.js"></script>




<script src="{{$path}}/vendors/bower_components/datatables.net/js/jquery.dataTables.min.js"></script>
<script src="{{$path}}/vendors/bower_components/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
<script src="{{$path}}/vendors/bower_components/datatables.net-buttons/js/buttons.print.min.js"></script>
<script src="{{$path}}/vendors/bower_components/jszip/dist/jszip.min.js"></script>
<script src="{{$path}}/vendors/bower_components/datatables.net-buttons/js/buttons.html5.min.js"></script>




<!-- App functions and actions -->
<script src="{{$path}}/js/app.min.js"></script>
@include('flash_message')
 </body>
</html>