@extends('/layouts.app1')
@section('content')
<link rel="stylesheet" href="{{ URL::asset('css/registration.css') }}" />
<div class="reg">  
<div class="contain">
   
  <form action="{{route('Registration')}}" id="reg" method="post">
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
    <h3>Registration</h3>
    <h4>Fill-up you departmental information</h4>


    <fieldset><span style="float:left;color:darkslateblue"> NAME</span>
      <input placeholder="Your name" name="name" value="{{old('name')}}" class="text">
    </fieldset>
    <!-- @error('name')
            <span class="text-danger">{{$message}}</span>
    @enderror -->


    <fieldset><span style="float:left;color:darkslateblue"> ID</span>
      <input placeholder="Your unique Id" name="prmId" value="{{old('prmId')}}" class="prmId">
    </fieldset>
    <!-- @error('prmID')
            <span class="text-danger">{{$message}}</span>
    @enderror -->


    <fieldset><span style="float:left;color:darkslateblue">EMAIL</span>
      <input placeholder="Your Email Address" name="email" value="{{old('email')}}" class="email" >
    </fieldset>
    <!-- @error('email')
            <span class="text-danger">{{$message}}</span>
    @enderror -->


    </br><fieldset><span style="float:left;color:darkslateblue">DEPARTMENT</span>
    <select name="dept" value="{{old('dept')}}" id="dept" class="dept" style="width: 60%">
        <option value="Medicine">Medicine</option>
        <option value="Surgical & Clinical">urgical & Clinical</option>
        <option value="Health & Care">Health & Care</option>
        <option value="Dental & Oral">Dental & Oral</option>
      </select>
    </fieldset>
    <!-- @error('dept')
            <span class="text-danger">{{$message}}</span>
    @enderror -->
    </br>


    <fieldset><span style="float:left;color:darkslateblue">DATE OF BIRTH</span>
      <input type="date" name="dob" value="{{old('dob')}}" class="dob" style="width: 60%">
    </fieldset>
    <!-- @error('dob')
            <span class="text-danger">{{$message}}</span>
    @enderror -->
    </br>


    <fieldset><span style="float:left;color:darkslateblue">GENDER</span>
            <input type="radio" name="gender" class="gender" value="Male"> Male &nbsp;&nbsp;&nbsp;
            <input type="radio" name="gender" class="gender" value="Female"> Female &nbsp;&nbsp;&nbsp;
            <input type="radio" name="gender" class="gender" value="Other"> Other
    </fieldset>
    <!-- @error('gender')
            <span class="text-danger">{{$message}}</span>
    @enderror -->
    </br>


    <fieldset><span style="float:left;color:darkslateblue">USERNAME</span>
      <input placeholder="Your username" name="username" value="{{old('username')}}" class="username">
    </fieldset>
    <!-- @error('username')
            <span class="text-danger">{{$message}}</span>
    @enderror -->


    <fieldset><span style="float:left;color:darkslateblue">PASSWORD</span>
      <input type="password" placeholder="Your pasword" name="password" value="{{old('password')}}" class="password">
    </fieldset>
    <!-- @error('password')
            <span class="text-danger">{{$message}}</span>
    @enderror -->


    <fieldset><span style="float:left;color:darkslateblue">CONFIRM PASSWORD</span>
      <input type="password" placeholder="Confirm your password" name="confirmpass" value="{{old('confirmpass')}}" class="confirmpass">
    </fieldset>
    <!-- @error('confirmpass')
            <span class="text-danger">{{$message}}</span>
    @enderror -->


    <fieldset><span style="float:left;color:darkslateblue">PHONE</span>
      <input placeholder="Your Phone Number" name="phone" value="{{old('phone')}}" class="tel">
    </fieldset>
    <!-- @error('phone')
            <span class="text-danger">{{$message}}</span>
    @enderror -->


    <fieldset><span style="float:left;color:darkslateblue">ADDRESS</span>
      <textarea placeholder="Type your address here...." name="address" value="{{old('address')}}"></textarea>
    </fieldset>
    <!-- @error('address')
            <span class="text-danger">{{$message}}</span>
    @enderror -->


    <fieldset>
      <button name="submit" class="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>
@endsection