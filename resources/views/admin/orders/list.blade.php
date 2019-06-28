@extends('layouts.material.layout')
@section('header')
    @parent

    <title> لیست سفارشات </title>

@endsection
@section('content')

    <div class="col-md-12">


        <div class="card">


            <div class="card-block">


                @include('admin.orders.table')

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

                function setModal(id, price, data) {

                    $('#fullname').text(data.fname + ' ' + data.lname);
                    $('#card_number').text(data.card_number);
                    $('#shaba_number').text(data.shaba_number);
                    $('#user_id').val(data.id);
                    $('#withdrawal_id').val(id);
                    $('#price').val(price);
                    $('#description').val(data.fname + ' ' + data.lname+' مبلغ '+price+' تومان به حساب شما('+data.card_number+') واریز شد');
                }


            </script>

@stop