@extends('layouts.app')
@section('content')
<style>
     head, body{background-color: white}
    .card{cursor: pointer; background-color: white}
    .hd{font-size: 45px;font-weight: 550}
    .card.hover, .card:hover{box-shadow: 0 20px 40px rgba(0, 0, 0, .2);}
    .card-title{font-weight: 600}button.focus, button:focus{outline: 0;box-shadow: none !important}.ft{margin-top: 25px}
    .chk{margin-bottom: 5px}
    .rck{margin-top: 20px;padding-bottom: 15px}
</style>
<div class='container-fluid mx-auto mt-5 mb-5 col-12' style="text-align: center">
    <div class="hd">Why People Believe in Us</div>
    <p><h6 class="text-dark">Always render more and better service than <br />is expected of you, no matter what your ask may be.</h6></p>
    <div class="row" style="justify-content: center">
        <div class="card col-md-3 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img" src="https://femina.wwmindia.com/content/2020/sep/home-appliances.jpg" width="234" height="186"/>
                    <div class="shadow"></div>
                    <h4 class="card-title"> Home Appliances </h4><br>
                    <div class="card-subtitle">
                        <p> <small class="text-dark">Air Conditioners,Refrigerators,Deep Freezers,Generators,UPS Battery,Washing Machines,Heaters,Solar Panel,DSLR Cameras,Air Cooler,Microwave oven,Water Filters</small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card col-md-3 col-12 ml-2">
            <div class="card-content">
                <div class="card-body"> <img class="img" src="https://5.imimg.com/data5/SELLER/Default/2021/4/US/FX/DC/119904249/electronic-gadgets-500x500.jpg" width="234" height="186"/>
                    <h4 class="card-title">Electronic Accessories </h4><br>
                    <div class="card-subtitle">
                        <p> <small class="text-dark">Earphone, Phone Cover,Mobile Charger,Mobile Battery,Power Bank,Memory Card,Smart Watch </small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card col-md-3 col-12 ml-2">
            <div class="card-content">
                <div class="card-body"> <img class="img" src="https://p1.pxfuel.com/preview/955/927/690/clothing-ibiza-boutique-femininity.jpg" width="234" height="186" />
                    <h4 class="card-title"> Beauty and Fashion </h4><br>
                    <div class="card-subtitle">
                        <p> <small class="text-dark">Ladies dress,Saree,Kids clothes,Makeup,Jewellary,Watch,Sun Glass,Hat,Shoe</small> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection