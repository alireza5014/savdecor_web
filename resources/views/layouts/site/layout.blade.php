<?php
$path = url('template/appexo'); ?>

<html lang="fa">
<head><title>طراحی داخلی ساودکور | savdecor</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="{{$path}}/Content/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="{{$path}}/Content/rtl.css">
    <script src="{{$path}}/Scripts/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="{{$path}}/Content/compressed.css">

</head>
<body style="overflow: visible;">
<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
<div id="preloader" style="display: none;">
    <div id="status" style="display: none;">&nbsp;</div>
</div>
<header>
    <nav class="navbar navbar-custom navbar-fixed-top affix-top" data-spy="affix" data-offset-top="100">
        <div class="container">
            <div class="row">
                <div class="navbar-header page-scroll">
                    <button type="button" class="navbar-toggle" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span>
                        منو <i class="fa fa-bars"></i></button>
                    <a class="navbar-brand page-scroll" href="#"><img alt=""
                                                                      src="{{$path}}/Content/Images/logo.png"></a></div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-left menu">
                        <li><a class="active" href="#welcome">خوش آمدید</a></li>
                        <li><a href="#service" class="">سرویس ها</a></li>
                        <li><a href="#overview" class="">بررسی</a></li>
                        <li><a href="#features" class="">ویژگیها</a></li>

                        <li class="hidden-xs"><a href="#download" class="">دانلود</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</header>
<div id="welcome" class="banner-content">
    <div id="banner-carousel" class="carousel slide" data-ride="carousel" data-interval="3000">
        <div class="carousel-inner">
            <div class="item active right">
                <div class="container">
                    <div class="row">
                        <div   class="intro-text col-md-12">
                            <img  width="100%" alt="" src="{{$path}}/ramadan.png"></div>

                    </div>
                </div>
                <div class="clearfix"></div>
             </div>


            <div class="item next right">
                <div class="container">
                    <div class="row">
                        <div class="intro-text col-md-7 col-sm-6">
                            <h1 class="intro-heading">
                                بزرگترین اپلیکیشن خرید آنلاین دکوراسیون داخلی
                            </h1>
                            <p>
                                یک روز پرترافیک و شلوغ با کلی مشغله و کار که سر خانم خونه ریخته به جای اینکه پاشی بری یه
                                جایی برای تغییر دکوراسیون خونه فقط کافیه اپلیکیشن ساو دکور رو نصب کنی و با کلی تنوع در
                                کاغذ دیواری ، لمینت ، کفپوش ، کامپوزیت و پنل های چرمی ، لوستر و آینه های دیواری و ....
                                می تونی انتخاب کنی و با درخواست آلبوم حضوری بدی تا کارشناس برسه خدمتتون
                            </p>
                            <div class="button"><a class="btn btn-primary" href="#">دانلود</a> <a
                                        class="btn btn-primary" href="#">اطلاعات بیشتر</a></div>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="mockup hidden-xs"><img alt="" src="{{$path}}/Content/Images/mockup-iphone-2.png"></div>
            </div>
            <div class="item     ">
                <div class="container">
                    <div class="row">
                        <div   class="intro-text col-md-12">
                            <img  width="100%" alt="" src="{{$path}}/slide1.png"></div>

                    </div>
                </div>
                <div class="clearfix"></div>
            </div>

        </div>

         <a class="left carousel-control" href="#banner-carousel" data-slide="prev"> <span
                    class="glyphicon glyphicon-chevron-left"></span> <span class="sr-only">قبلی</span> </a> <a
                class="right carousel-control" href="#banner-carousel" data-slide="next"> <span
                    class="glyphicon glyphicon-chevron-right"></span> <span class="sr-only">بعدی</span> </a></div>
</div>
<section id="service" class="service sec-pad">
    <div class="container">
        <div class="row">
            <div class="service-holder">
                <div class="ser-row text-center">
                    <div class="col-sm-6 col-md-3 service-colum">
                        <div class="service-icon"><img alt="" src="{{$path}}/delivery-truck.png"></div>
                        <div class="service-text"><h4>ارسال رایگان</h4>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 service-colum">
                        <div class="service-icon"><img alt="" src="{{$path}}/business.png"></div>
                        <div class="service-text"><h4>پرداخت درب منزل</h4>

                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 service-colum">
                        <div class="service-icon"><img alt="" src="{{$path}}/mechanic.png"></div>
                        <div class="service-text"><h4>ارائه خدمات نصب</h4>

                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 service-colum">
                        <div class="service-icon">
                            <img alt="" src="{{$path}}/support.png"></div>
                        <div class="service-text"><h4>پشتیبانی 24 ساعته </h4>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="overview" class="about-app sec-pad">
    <div class="container">
        <div class="row">
            <div class="overview-details row">
                <div class="col-md-6 col-md-push-5 col-md-offset-1">
                    <div class="mockup-abt"><img class="wow zoomIn animated" data-wow-delay="0.2s" alt=""
                                                 src="{{$path}}/Content/Images/abt-mockup.png"
                                                 style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
                    </div>
                </div>
                <div class="col-md-5 col-md-pull-7">
                    <div class="abt-text "><h3
                                style="color: #0b0b0b;font-size: 22px !important;padding-bottom: 20px !important;">
                            بزرگترین اپلیکیشن خرید آنلاین دکوراسیون داخلی</h3>
                        <p>
                            یک روز پرترافیک و شلوغ با کلی مشغله و کار که سر خانم خونه ریخته به جای اینکه پاشی بری یه
                            جایی برای تغییر دکوراسیون خونه فقط کافیه اپلیکیشن ساو دکور رو نصب کنی و با کلی تنوع در کاغذ
                            دیواری ، لمینت ، کفپوش ، کامپوزیت و پنل های چرمی ، لوستر و آینه های دیواری و .... می تونی
                            انتخاب کنی و با درخواست آلبوم حضوری بدی تا کارشناس برسه خدمتتون</p>
                        <a class="btn btn-secondary" href="#"><i class="fa fa-download" aria-hidden="true"></i>دانلود مستقیم</a>

                        <a class="btn btn-secondary" href="#"><i class="fa fa-download" aria-hidden="true"></i>بازار</a>
                        <a class="btn btn-secondary" href="#"><i class="fa fa-download"  aria-hidden="true"></i>مایکت</a>
                        <a class="btn btn-secondary" href="#"><i class="fa fa-download"  aria-hidden="true"></i>ایران اپس</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="specification" class="specification sec-pad">
    <div class="container">
        <div class="row">
            <div class="section-text text-center"><h1 class="section-heading">چرا اپلیکیشن ساودکور؟</h1>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                    و متون بلکه .</p><br> روزنامه و مجله در ستون و سطرآنچنان که لازم است<p></p></div>
            <div class="specification-holder clearfix">
                <div class="col-md-4 col-sm-8 col-sm-offset-2 col-md-offset-0 left-specification">
                    <div class="specification-list wow fadeInLeft" data-wow-delay=".1s"
                         style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInLeft;">
                        <div class="icon"><i class="fa fa-leaf" aria-hidden="true"></i></div>
                        <div class="specification-text">
                            <div class="specification-title"> کاغذ دیواری</div>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .</p></div>
                    </div>
                    <div class="specification-list wow fadeInLeft" data-wow-delay=".1s"
                         style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInLeft;">
                        <div class="icon"><i class="fa fa-cube" aria-hidden="true"></i></div>
                        <div class="specification-text">
                            <div class="specification-title"> کفپوش</div>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .</p></div>
                    </div>
                    <div class="specification-list wow fadeInLeft" data-wow-delay=".1s"
                         style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInLeft;">
                        <div class="icon"><i class="fa fa-cube" aria-hidden="true"></i></div>
                        <div class="specification-text">
                            <div class="specification-title"> لوستر</div>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .</p></div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-8 col-sm-offset-2 col-md-offset-0">
                    <div class="specification-mockup wow  pulse animated" data-wow-delay=".5s"
                         style="visibility: visible; animation-delay: 0.5s; animation-name: pulse;"><img alt=""
                                                                                                         src="{{$path}}/Content/Images/feature-mockup-iphone.png">
                    </div>
                </div>
                <div class="col-md-4 col-sm-8 col-sm-offset-2 col-md-offset-0 right-specification">
                    <div class="specification-list wow fadeInRight" data-wow-delay=".1s"
                         style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInRight;">
                        <div class="icon"><i class="fa fa-rocket" aria-hidden="true"></i></div>
                        <div class="specification-text">
                            <div class="specification-title"> لمینیت</div>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .</p></div>
                    </div>
                    <div class="specification-list wow fadeInRight" data-wow-delay=".1s"
                         style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInRight;">
                        <div class="icon"><i class="fa fa-cogs" aria-hidden="true"></i></div>
                        <div class="specification-text">
                            <div class="specification-title"> کامپوزیت و پنل های چرمی</div>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .</p></div>
                    </div>
                    <div class="specification-list wow fadeInRight" data-wow-delay=".1s"
                         style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInRight;">
                        <div class="icon"><i class="fa fa-cube" aria-hidden="true"></i></div>
                        <div class="specification-text">
                            <div class="specification-title"> آینه دیواری</div>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section id="download" class="download sec-pad">
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <div class="download-text">
                    <h3 style="padding-bottom: 20px!important;">ما در اپلیکیشن ساو دکور علاوه بر فروش محصولات</h3>
                    <p>   این امکان را به شما می دهیم در صورت نیاز به نصاب و
                        مشاهده آلبوم به صورت حضوری با کارشناسان مجرب و حرفه ای در زمینه طراحی و تغییر دکوراسیون منازل و
                        فروشگاه در مدت زمان کوتاه خدمات ارایه می دهیم</p>
                    <div class="button">
                        <a class="btn btn-primary" href="#">
                            <i class="fa fa-android" aria-hidden="true"> </i>
                            بازار</a>
                        <a class="btn btn-primary" href="#"><i class="fa fa-android" aria-hidden="true"></i>
                            مایکت</a>
                        <a class="btn btn-primary" href="#"><i class="fa fa-android" aria-hidden="true"></i>
                            ایران اپس</a></div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="subscribe sec-pad">
    <div class="container">
    </div>
</section>

<section class="contact">
    <div class="container">
        <div class="row">
            <div class="contact-holder row">
                <div class="col-md-6 res-margin"><h3>تماس با ما</h3>
                    <form class="custom-form">
                        <div class="form-group"><input type="text" class="form-control" placeholder="ایمیل"></div>
                        <div class="form-group"><input type="email" class="form-control" placeholder="نام"></div>
                        <div class="form-group"><textarea class="form-control" placeholder="پیام"></textarea></div>
                        <button>ارسال</button>
                    </form>
                </div>
                <div class="col-md-5 col-md-offset-1"><h3>درباره ما</h3>
                    <p>
                        اپلیکیشن ساو دکور امکان خرید آنلاین و خدمات نصب و آلبوم حضوری با کارشناس مجرب و حرفه ای ارائه می
                        دهد.
                    </p>
                    <ul class="contact-details">
                        <li><i class="fa fa-map-marker" aria-hidden="true"></i> <span>ایران - تهران</span></li>
                        <li><i class="fa fa-phone" aria-hidden="true"></i> <a
                                    href="tel:02166201716"><span>۰۲۱۶۶۲۰۱۷۱۶ </span></a></li>
                        <li><i class="fa fa-mobile-phone" aria-hidden="true"></i> <a
                                    href="tel:09194986460"><span>۰۹۱۹۴۹۸۶۴۶۰ </span></a></li>
                        <li  ><a href="https://www.instagram.com/savdecor"><i class="fa fa-instagram" aria-hidden="true"></i>
                                <span>@savdecor</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<footer class="footer-wrapper">
    <div class="container">
        <div class="row">
            <div class="social-holder"><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a> <a href="#"><i
                            class="fa fa-twitter" aria-hidden="true"></i></a> <a href="#"><i class="fa fa-linkedin"
                                                                                             aria-hidden="true"></i></a>
                <a
                        href="#"><i class="fa fa-google" aria-hidden="true"></i></a></div>
            <div class="copyright"> کپی رایت ۲۰۱۹ <strong> SavDecor</strong> کلیه حقوق محفوظ است</div>
        </div>
    </div>
</footer>
<script src="{{$path}}/Scripts/compressed.js"></script>

</body>
</html>
