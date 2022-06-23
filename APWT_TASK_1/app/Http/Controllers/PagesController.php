<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function index(){

        $welcome = "Welcome";

        return view('hello')->with('welcome', $welcome);
    }
    public function contact(){

        $welcome = "Welcome";

        return view('contact')->with('welcome', $welcome);
    }
    public function service(){

        return view('service');
    }
    public function ourteams(){

        return view('ourteams');
    }
    public function AboutUs(){

        return view('AboutUs');
    }


    public function profile(){
        $name = "Mr. x";
        $id="11-11111-1";
        $dob = "10-10-2010";
        $names=array("Mr. X", "Mr. Y", "Mr. Z");
        return view('profile')
        ->with('name', $name)
        ->with('id', $id)
        ->with('dob', $dob)
        ->with('names', $names);
    }
}
