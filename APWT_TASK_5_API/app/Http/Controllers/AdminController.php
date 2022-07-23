<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Http\Requests\StoreAdminRequest;
use App\Http\Requests\UpdateAdminRequest;
use App\Models\Delivery;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreAdminRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAdminRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function show(Admin $admin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function edit(Admin $admin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAdminRequest  $request
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAdminRequest $request, Admin $admin)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Admin $admin)
    {
        //
    }
    public function adminDash(){
        return view('admin.adminDash');

    }
    public function aboutus(){
        return view('admin.aboutus');

    }
    public function Profile(Request $request){
        $admin = Admin::where('username', $request->session()->get('user'))->first();
        return view('admin.Profile')->with('admin', $admin);  
       }
       public function editProfile(Request $request){
        $admin = Admin::where('username', $request->session()->get('user'))->first();
        // return $customer;
        return view('admin.EditProfile')->with('admin', $admin);
    
        }
    
        public function editProfileSubmitted(Request $request){
            $admin = Admin::where('username', $request->session()->get('user'))->first();
            // return  $student;
            $admin->id = $request->id;
            $admin->name = $request->name;
            $admin->username = $request->username;
            $admin->password = $request->password;
            $admin->save();
            return redirect()->route('Profile');
    
        }

}