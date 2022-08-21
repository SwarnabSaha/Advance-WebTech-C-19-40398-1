import React, { useState, useEffect } from "react";
import "../assets/css/dashboard.css";
import "../assets/css/counter.css";
import { Link } from "react-router-dom";

import Logout from "./Logout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SidenavPharmacist from "./SidenavPharmacist";
import { useHistory } from "react-router";
import axios from "axios";
import SidenavCustomer from "./SidenavCustomer";

const DashboardCustomer = () => {
  let [countReviews, setCountReviews] = useState(0);
  let [countRequest, setCountRequest] = useState(0);
  let [countDonations, setCountDonations] = useState(0);
  let [countAmount, setCountAmount] = useState(0);
  const history = useHistory();

  useEffect(() => {}, []);

  if (localStorage.getItem("user")) {
    return (
      <div>
        <SidenavCustomer></SidenavCustomer>

        <div>Welcome</div>
      </div>
    );
  } else {
    return <div>You cannot access this page.</div>;
  }
};
export default DashboardCustomer;
