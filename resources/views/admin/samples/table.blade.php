@foreach($data as $datum)
    <div class="col-md-6 offset-md-3">

        <div class="accordion " id="accordionExample{{$datum->id}}">

            <div class="card">
                <div class="card-header  alert alert-info">
                    <a class="card-title text-center" data-toggle="collapse" data-parent="#accordionExample"
                       href="#collapse{{$datum->id}}" aria-expanded="true">{{$datum->title}}</a>
                </div>

                <div id="collapse{{$datum->id}}" class="collapse " aria-expanded="true" style="">
                    <div class="card-block">
                        <button onclick="newSample('{{$datum->id}}','{{$datum->title}}')"
                                class="btn btn-primary btn-xs col-md-4 offset-md-4"
                                data-toggle="modal" data-target="#modal-small">جدید
                        </button>
                        <div class="col-md-12">

                            <div class="card">
                                <div class="card-block">
                                    <div class="row">
                                        @foreach($datum->samples as $sample)


                                            <div class="col-md-6">
                                                <div class="stats__item">


                                                    <div class="profile__img">
                                                        <img src="{{url($sample->image_path)}}"/>
                                                    </div>

                                                    <header class="content__title">
                                                        <h5>{{$sample->title}}</h5>

                                                        <div class="actions">

                                                            <div class="dropdown actions__item">
                                                                <i data-toggle="dropdown"
                                                                   class="zmdi zmdi-more-vert"></i>
                                                                <div class="dropdown-menu dropdown-menu-left">
                                                                    <a onclick="setEditModal('{{$sample}}')"
                                                                       data-toggle="modal" data-target="#modal-small"
                                                                       class="dropdown-item"> ویرایش</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </header>

                                                </div>

                                            </div>                        @endforeach
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endforeach


<script>
    function newSample(id, title) {
        $('#my_title').text(title);
        $('#service_id').val(id);

    }
</script>