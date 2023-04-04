<?php

namespace App\Models;

use App\Models\Demand;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Service extends Model
{
    use HasFactory;
    protected $fillable = ['name','description','price'];

    function demands(){
        return $this->hasMany(Demand::calss);
    }
}
