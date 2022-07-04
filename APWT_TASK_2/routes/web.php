<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/',[PagesController::class, 'index'])->name('home');
Route::get('/login',[LoginController::class, 'login'])->name('login');
Route::post('/login',[LoginController::class, 'loginSubmitted'])->name('login');
Route::get('/logout',[LoginController::class,'logout'])->name('logout');

Route::get('/contact',[StudentController::class, 'contact'])->name('contact');
Route::post('/contact',[StudentController::class, 'contactSubmitted'])->name('contact');

Route::get('/registration',[StudentController::class, 'registration'])->name('registration');
Route::post('/registration',[StudentController::class, 'registrationSubmitted'])->name('registration');
Route::get('/student/dash', [StudentController::class,'studentDash'])->name('studentDash');