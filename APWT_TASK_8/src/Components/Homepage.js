import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signin from "../Components/Signin";

import Dashboard from "./Sidenav";

const Homepage = () => {
  return (
    <div className="top-container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/Homepage">
          Sanofy
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link className="nav-link" to="/SigninAdmin">
                Admin
              </Link>
            </li>

            <li class="nav-item active">
              <Link className="nav-link" to="/SigninCustomer">
                Customer
              </Link>
            </li>
            <li class="nav-item active">
              <Link className="nav-link" to="/SigninPharmacist">
                Pharmacist
              </Link>
            </li>
            <li class="nav-item active">
              <Link className="nav-link" to="/Signin">
                Deliveryman
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>

            <li class="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Homepage;
