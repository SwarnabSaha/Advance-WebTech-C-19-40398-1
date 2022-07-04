<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
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
          <a class="nav-link" href="{{route('login')}}">Sign In</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{route('registration')}}">Sign Up</a>
        </li>  
        <li class="nav-item">
          <a class="nav-link" href="{{route('contact')}}">Contact Us</a>
        </li>
      </ul>
    </div>
</div>
  </div>
</nav>