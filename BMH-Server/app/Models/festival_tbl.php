<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class festival_tbl extends Model
{
    use HasFactory;
    protected $fillable = ['hotel_id', 'room_id', 'start_date', 'end_date', 'festival_name', 'price', 'margin_percentage', 'total_price'];
}
