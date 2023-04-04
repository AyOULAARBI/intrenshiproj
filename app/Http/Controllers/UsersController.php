<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Demand;
use Illuminate\Http\Request;
use App\Http\Requests\RegisterUser;

class UsersController extends Controller
{

    function login(Request $request){
        $request->validate([
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string', 'min:3']
        ]);
        auth()->attempt([
            'email' => $request->email,
        'password' => $request->password
        ]);
        return redirect('/employee/dashboard');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    function register(RegisterUser $request ){
        // $request->validate([
        //     'name' => ['required', 'string', 'max:255'],
        //     'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        //     'password' => ['required', 'string', 'min:3']
        // ]);
        $res = array_merge($request->validated(),['password'=>bcrypt($request->password),'group_id'=>1]);
        $user = User::create($res);
        auth()->attempt([
            'email' => $request->email,
        'password' => $request->password
        ]);
        return redirect('/employee/dashboard');
        // return Inertia::render('Employee/Dashboard');
        
    }

    public function dashboard(){
        $auth = auth()->user();
        $total = Demand::all();
        $confirmed = Demand::where('isConfirmed','=',true)->get();
        $unconfirmed = Demand::where('isConfirmed','=',false)->get();
        $paid = Demand::where('isPaid','=',true)->get();
        return Inertia::render('Employee/Dashboard',compact('auth','total','confirmed','unconfirmed','paid'));
    }

    public function index()
    {
        $users = User::all();
        return Inertia::render('Users',compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
