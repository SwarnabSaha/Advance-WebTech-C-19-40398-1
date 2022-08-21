import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signin from "../Components/Signin";

import Dashboard from "./Sidenav";

const TopPharmacist = () => {
  return (
    <div className="top-container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="">
          Pharmacist
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link className="nav-link" to="/SigninPharmacist">
                Signin
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
export default TopPharmacist;
