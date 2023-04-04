<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Client;
use App\Models\Demand;
use App\Models\Service;
use Illuminate\Http\Request;

class RequestController extends Controller
{
    function createClient($data){
        //
    }
    function handleRequest(Request $request){
        $request->validate([
            'name'=>'required',
            'email'=> ['required','unique:clients'],
            'phone'=>'required',
            'address' => 'required',
            'service_id'=>'required',
        ]);
        
        $client = Client::create(
            ['name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,]
        );

        $command = Demand::create(
            [
                'client_id'=>$client->id,
        'service_id' => $request->service_id,
    ]);
        return Inertia::render('Done');
    }

    public function unconfirmedReqs(){
        $requests = Demand::with('client','service')->where('isConfirmed','=',false)->get();
        return Inertia::render('Employee/UnconfirmedReqs',compact('requests'));
    }

    function confirm(Demand $demand){
        // dd($demand);
        $demand->update(['isConfirmed' => true]);
        self::unconfirmedReqs() ;
        
    }
    function paid(Demand $demand){
        dd($demand);
        
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Demand $demand)
    {
        dd($demand);
    }
    public function index()
    {
        //
    }

  
}
