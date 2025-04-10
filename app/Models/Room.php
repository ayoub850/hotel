<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;
    protected $fillable = [
       'number','capacity','price','length','width','description','is_available','photo1','photo2','photo3','photo4'
    ];
    protected $casts =[
        'is_available' => 'boolean',
    ];
    public function reservations(){
        return $this->hasMany(Reservation::class);
    }
}
