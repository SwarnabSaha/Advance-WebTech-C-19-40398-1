@extends('layouts.app')
@section('content')
<!DOCTYPE html>
<html lang="en">
<head> 
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body> 
<div class="container">
<div class="row justify-content-between">
        <div class="col-12 col-sm-8 py-4 px-0">
            <div class="card">
                <div class="card-header bg-success text-white "><i class="fa fa-envelope"></i> Contact Us
                </div>
                <div class="card-body">
                <form action="{{route('contact')}}" class="form-group" method="post">
    <!--Cross Site Request Forgery-->
    {{csrf_field()}}

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
                        <div class="form-group">
                        <span>Name</span>
        <input type="text" name="name" value="{{old('name')}}" class="form-control">
        @error('name')
            <span class="text-danger">{{$message}}</span>
        @enderror
                        </div>
                        <div class="form-group">
                        <span>Email</span>
        <input type="text" name="email" value="{{old('email')}}" class="form-control" aria-describedby="emailHelp">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            
                        </div>
                        <div class="form-group">
                        <span>Message</span>
                        <textarea type="text" name="message" value="{{old('message')}}" rows="6" class="form-control">
</textarea>  
                        </div>
                        <div class="my-2">
                        <button type="submit" class="btn btn-success text-right">Submit</button></div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-3 py-4 px-0">
            <div class="card bg-light mb-3">
                <div class="card-header bg-success text-white text-uppercase"><i class="fa fa-home"></i> Address</div>
                <div class="card-body">
                    <p>Motijheel</p>
                    <p>256-Dhaka</p>
                    <p>Bangladesh</p>
                    <p>Email : evaly@example.com</p>
                    <p>Tel. +880 17 00 00 00 00</p>

                </div>

            </div>
        </div>
</div>
</div>
</body>
</html>
@endsection