<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tokolbk', function (Blueprint $table) {
            $table->string('kode_toko')->primary();
            $table->string('nama_toko');
            $table->string('ip_gateway');
            $table->string('ip_induk');
            $table->string('ip_anak');
            $table->string('ip_stb');
            $table->string('ip_wdcp');
            $table->string('area');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tokolbk');
    }
};
