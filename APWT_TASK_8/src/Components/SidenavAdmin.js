import React, { useState, useEffect } from "react";
import "../assets/css/dashboard.css";
import { Link } from "react-router-dom";

import Logout from "./Logout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const SidenavAdmin = () => {
  let [email, setEmail] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      var obj = JSON.parse(localStorage.getItem("user"));
      setEmail(obj.email);
    }
  }, []);

  return (
    <div className="top-container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/Dashboard">
          Admin
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link className="nav-link" to="/DashboardAdmin">
                Dashboard
              </Link>
            </li>

            <li class="nav-item">
              <Link className="nav-link" to={"/CustomerAdmin"}>
                Customers
              </Link>
            </li>

            <li class="nav-item">
              <Link className="nav-link" to={"/ChangeInformationAdmin"}>
                Profile
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to={"/FeedbackAdmin"}>
                Feedback
              </Link>
            </li>

            <li class="nav-item">
              <Link className="nav-link" to="/Logout">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default SidenavAdmin;
