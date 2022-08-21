import React, { Component } from "react";
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const TopNav = () => {
    return (
        // <nav class="navbar">
        //     <a href="#" class="sidebar-toggler">
        //         <i data-feather="menu"></i>
        //     </a>
        //     <div class="navbar-content">
        //         <ul class="navbar-nav">
        //             <li class="nav-item dropdown">
        //                 <a class="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-bs-toggle="dropdown"
        //                     aria-haspopup="true" aria-expanded="false">
        //                     <i data-feather="mail"></i>
        //                 </a>
        //                 <div class="dropdown-menu p-0" aria-labelledby="messageDropdown">
        //                     <div class="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
        //                         <p>0 New Messages</p>
        //                         <a href="javascript:;" class="text-muted">Clear all</a>
        //                     </div>
        //                 </div>
        //             </li>
        //             <li class="nav-item dropdown">
        //                 <a class="nav-link dropdown-toggle" href="#" id="notificationDropdown" role="button"
        //                     data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                     <i data-feather="bell"></i>
        //                     <div class="indicator">
        //                         <div class="circle"></div>
        //                     </div>
        //                 </a>
        //                 <div class="dropdown-menu p-0" aria-labelledby="notificationDropdown">
        //                     <div class="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
        //                         <p>0 New Notifications</p>
        //                         <a href="javascript:;" class="text-muted">Clear all</a>
        //                     </div>
        //                     <div class="px-3 py-2 d-flex align-items-center justify-content-center border-top">
        //                         <a href="javascript:;">View all</a>
        //                     </div>
        //                 </div>
        //             </li>

        //         </ul>
        //     </div>
        // </nav>
        <Navbar bg="primary">
       <Container>
         <Link to={"./contents/customerlist"} className="navbar-brand text-white">
           Sanofy
         </Link>

         <Link to={"/"} className="navbar-brand text-white">
           Prescriptions
        </Link>
  
       </Container>
     </Navbar>
    )
}
export default TopNav;