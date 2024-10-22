<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AvailableUsers extends Model
{
    protected $table = 'available_users';
    protected $primaryKey = 'nik';
    protected $keyType = 'string';
    public $incrementing = false;
    public $timestamps = false;
    protected $guarded = [];
}
