@extends('layouts.app')
@section('content')

<style>
    head,body{background-color: white}
    .card{cursor: pointer; background-color: white}
    .hd{font-size: 45px;font-weight: 550}
    .card.hover, .card:hover{box-shadow: 0 20px 40px rgba(0, 0, 0, .2);}
    .card-title{font-weight: 600}button.focus, button:focus{outline: 0;box-shadow: none !important}.ft{margin-top: 25px}
    .chk{margin-bottom: 5px}
    .rck{margin-top: 20px;padding-bottom: 15px}
</style>

<div class='container-fluid ' style="text-align: center">
    <div class="header my-5">
       <h1>About Us </h1>
     </div>
    <div class="row" style="justify-content: center">
        <div class="card col-md-8 px-5 col-12">
            <div class="card-content">
                <div class="card-body"> 
                    <div class="shadow"></div>
                    <div class="card-subtitle">
                        <p> <small class="text-dark">Evaly Online Shopping Mall launched June 2022. From the beginning, it became popular. All kinds of products like home appliances, beauty, and fashion, baby products, accessories, clothes, electronics, etc are available here.If you are a small business owner, you can open a shop on this platform to sell your product online. The payment option is as follows: Visa Card, Master Card, bKash, Cash-on-delivery, Etc.</small> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
<div class="header my-5">
       <h1>Our Values  </h1>
     </div>
     <div class="row" style="justify-content: center">
        <div class="card col-md-8 px-5 col-12 ml-2">
            <div class="card-content">
                <div class="card-body"> 
                    <div class="card-subtitle">
                        <p> <small class="dark">Evaly aims to provide a trouble-free shopping experience for the people of Bangladesh but is also providing a simple opportunity for international online shopping from Bangladesh. Evaly aims to make online shopping accessible to all parts of the country. Everyone is encouraged to shop with confidence at evaly.com.bd as our strict buyer’s protection policies ensure no risks while shopping online.</small> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection