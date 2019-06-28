<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');

            $table->string('fname');
            $table->string('lname');
            $table->integer('chat_id');
            $table->string('mobile')->unique();
            $table->string('password');
            $table->string('telephone');
            $table->string('code_melli');
            $table->string('address');
            $table->integer('sms_code');
            $table->string('ip');
            $table->string('image_path');
            $table->string('device')->default('android');
            $table->tinyInteger('is_active')->default(1);
            $table->rememberToken();
            $table->timestamps();


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
