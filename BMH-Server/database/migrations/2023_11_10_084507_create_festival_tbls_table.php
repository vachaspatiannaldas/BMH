<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('festival_tbls', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('hotel_id');
            $table->bigInteger('room_id');
            $table->date('start_date');
            $table->date('end_date');
            $table->string('festival_name');
            $table->float('price');
            $table->float('margin_percentage');
            $table->float('total_price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('festival_tbls');
    }
};
