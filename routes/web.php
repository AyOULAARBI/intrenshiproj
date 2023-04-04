<?php

use App\Models\User;
use Inertia\Inertia;
use App\Models\Demand;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\ServicesController;




Route::get('/',function(){
    return Inertia::render('Welcome');
});

Route::get('/services',[ServicesController::class,'index']);
Route::get('/services/search',[ServicesController::class,'search']);
Route::get('/services/{service}',[ServicesController::class,'show']);

//demand requests
Route::post('/request',[RequestController::class,'handleRequest']);

//auth
Route::get('/login',function(){
    return Inertia::render('Auth/Login');
})->name('login');
Route::get('/signup',function(){
    return Inertia::render('Auth/Register');
});
Route::post('/login',[UsersController::class,'login']);
Route::post('/signup',[UsersController::class,'register']);



//Employee
Route::group(['middleware'=>'auth'],function(){
    Route::post('/logout',function(){
        Auth::logout();
        return redirect('/');
    });
    Route::group(['prefix'=>'employee'],function(){
        Route::get('/dashboard',[UsersController::class,'dashboard']);
        Route::get('/unconfirmedRequests',[RequestController::class,'unconfirmedReqs']);
        Route::get('/confirmed/{demand}',[RequestController::class,'confirm']);
        Route::get('/paid/{demand}',[RequestController::class,'paid']);
        Route::get('/delete/{demand}',[RequestController::class,'destroy']);
    });

    Route::group(['prefix'=>'admin'],function(){
        Route::get('/employees',function(){
            $employees = User::where('role','=','employee')->get();
            return Inertia::render('Admin/Employees',compact('employees'));
        });
        
        Route::get('/employee/create',function(){ 
            return  Inertia::render('Admin/CreateEmployee');
        } );
        //createEmployee Post
        //admin/employee/edit get
        Route::get('/employee/edit/{employee}',function(User $employee){ 
            return  Inertia::render('Admin/EditEmployee',compact('employee'));
        } );
        //admin/employee/store post
    });
});
//auth
// Auth::routes();
// Route::post('/t',function(){
//     return Inertia::render('Users');
// });
;
// Route::post('/signup',[UsersController::class,'register']);


// Route::get('/test',function(){
//     return Inertia::render('Home');
// });
// Route::resource('users',UsersController::class);
// Route::get('/', function () {
//     return view('welcome',['by'=>'AYOUB OULAARBI','price'=>1,'isTafarnout'=>true]);
// });
// Route::get('/register', function () {
//     //database fetching (usually)
//     return view('login',['fname'=>'AYOUB','lname'=>'OULAARBI','email'=>'ayoub6oulaarbi6@gamil.com',]);
// });


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
