<?php

namespace App\Models;

use App\Models\Client;
use App\Models\Service;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Demand extends Model
{
    use HasFactory;
    protected $fillable=['client_id','service_id','isConfirmed','isPaid'];

    function client(){
        return $this->belongsTo(Client::class);
    }
    function service(){
        return $this->belongsTo(Service::class);
    }
}
