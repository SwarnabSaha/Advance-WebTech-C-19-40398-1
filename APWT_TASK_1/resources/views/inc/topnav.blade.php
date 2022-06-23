<!--<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container">
    <a class="navbar-brand" href="{{route('home')}}" style= "margin: 10px;"><h1><p class="text-warning"><span class="text-danger">e</span>valy</p></h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div style="float: right;margin: 20px;">
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="{{route('home')}}">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{route('service')}}">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{route('ourteams')}}">Our Teams</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{route('AboutUs')}}">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{route('contact')}}">Contact Us</a>
        </li>     
      </ul>
    </div>
</div>
  </div>
</nav>

<div style="float: right;margin: 20px;">
<a class="btn btn-primary " href="{{route('home')}}">Home</a>
<a class="btn btn-primary " href="{{route('service')}}">Service</a>
<a class="btn btn-primary " href="{{route('ourteams')}}">Our Teams</a>
<a class="btn btn-primary " href="{{route('AboutUs')}}">About Us</a>
<a class="btn btn-primary " href="{{route('contact')}}">Contact Us</a>
<a class="btn btn-primary " href="{{route('profile')}}">Profile</a>
<a class="btn btn-primary " href="{{route('studentList')}}">Student List</a>
<a class="btn btn-primary " href="{{route('studentCreate')}}">Student Create</a>
<a class="btn btn-primary " href="">Login</a>
</div>
-->
<header class="site-header">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <a class="navbar-brand" href="{{route('home')}}" style= "margin: 10px;"><h1><p class="text-warning"><span class="text-danger">e</span>valy</p></h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link" href="{{route('home')}}">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{route('service')}}">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{route('ourteams')}}">Our Teams</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{route('AboutUs')}}">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{route('contact')}}">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Sign Up</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Sign In</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


