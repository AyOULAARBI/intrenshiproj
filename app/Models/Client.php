<?php

namespace App\Models;

use App\Models\Demand;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'address',
    ];
    function demands(){
        return $this->hasMany(Demand::class,'client_id');
    }
}
