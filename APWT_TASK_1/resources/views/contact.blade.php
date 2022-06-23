@extends('layouts.app')
@section('content')

<div class="container">
<div class="row justify-content-between">
        <div class="col-12 col-sm-8 py-4 px-0">
            <div class="card">
                <div class="card-header bg-success text-white "><i class="fa fa-envelope"></i> Contact Us
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea class="form-control" id="message" rows="6" required></textarea>
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
@endsection