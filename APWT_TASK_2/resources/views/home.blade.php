@extends('layouts.app')
@section('content')
<!-- Carousel <h1>
    {{$welcome}}
    To Our Company
</h1>-->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<!-- Carousel -->
<div id="demo" class="carousel slide" data-bs-ride="carousel">

  <!-- Indicators/dots -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  <!-- The slideshow/carousel -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://thefinancialexpress.com.bd/uploads/1599042920.jpg" alt="Los Angeles" class="d-block" style="width:100%;height:80%;">
    </div>
    <div class="carousel-item">
      <img src="https://www.newagebd.com/files/records/news/202103/132329_170.jpg" alt="Chicago" class="d-block" style="width:100%;height:80%;">
    </div>
    <div class="carousel-item">
      <img src="https://thefinancialexpress.com.bd/public/uploads/1614429044.jpg" alt="New York" class="d-block" style="width:100%;height:80%;">
    </div>
  </div>
  
  <!-- Left and right controls/icons -->
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
@endsection
