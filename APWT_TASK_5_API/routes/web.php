<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PharmacyController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DeliveryController;

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


Route::get('/',[PharmacyController::class, 'index'])->name('Home');

// For Login route
Route::get('/login',[LoginController::class, 'Login'])->name('Login');
Route::post('/login',[LoginController::class, 'loginSubmitted'])->name('Login');
Route::get('/logout',[LoginController::class,'logout'])->name('logout');

// For Registration route
Route::get('/registration',[PharmacyController::class, 'PharmaReg'])->name('Registration');
Route::post('/registration',[PharmacyController::class, 'PharmaRegSubmitted'])->name('Registration');
Route::get('/admin/dash', [AdminController::class,'adminDash'])->name('adminDash')->middleware('UserLogged');

Route::get('/user/viewcustomerlist',[CustomerController::class, 'ViewCustomerList'])->name('viewCustomerList')->middleware('UserLogged');
Route::get('/customerEdit/{id}',[CustomerController::class, 'customerEdit'])->name('customerEdit');
Route::post('/customertEdit',[CustomerController::class, 'customerEditSubmitted'])->name('customerEdit');
Route::get('/customerDelete/{id}',[CustomerController::class, 'customerDelete'])->name('customerDelete');

Route::get('/addDeliveryman',[DeliveryController::class, 'addDeliveryman'])->name('addDeliveryman');
Route::post('/addDeliveryman',[DeliveryController::class, 'addDeliverymanSubmitted'])->name('addDeliveryman');
Route::get('/user/viewDeliverymanlist',[DeliveryController::class, 'ViewDeliveryList'])->name('viewDeliverymanList')->middleware('UserLogged');

Route::get('/aboutus',[AdminController::class, 'aboutus'])->name('aboutus')->middleware('UserLogged');

Route::get('user/profile',[AdminController::class, 'Profile'])->name('Profile')->middleware('UserLogged');
Route::get('/user/edit',[AdminController::class, 'editProfile'])->name('EditProfile')->middleware('UserLogged');
Route::post('/user/edit',[AdminController::class, 'editProfileSubmitted'])->name('EditProfile')->middleware('UserLogged');