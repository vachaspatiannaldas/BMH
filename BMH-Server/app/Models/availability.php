<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class availability extends Model
{
    use HasFactory;
    protected $fillable=['hotel_id','room_id','start_date','end_date'];
}
