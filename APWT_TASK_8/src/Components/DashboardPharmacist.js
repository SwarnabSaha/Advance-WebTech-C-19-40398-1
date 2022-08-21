import React, { useState, useEffect } from "react";
import "../assets/css/dashboard.css";
import "../assets/css/counter.css";
import { Link } from "react-router-dom";

import Logout from "./Logout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SidenavPharmacist from "./SidenavPharmacist";
import { useHistory } from "react-router";
import axios from "axios";

const DashboardPharmacist = () => {
  let [countReviews, setCountReviews] = useState(0);
  let [countRequest, setCountRequest] = useState(0);
  let [countDonations, setCountDonations] = useState(0);
  let [countAmount, setCountAmount] = useState(0);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("/pharmacist/allproduct")
      .then((resp) => {
        setCountReviews(resp.data.length);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/pharmacist/requestproduct")
      .then((resp) => {
        setCountRequest(resp.data.length);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/pharmacist/allprescription")
      .then((resp) => {
        setCountDonations(resp.data.length);
        resp.data.forEach(
          (element) =>
            (countAmount = parseInt(countAmount) + parseInt(element.amount))
        );
        setCountAmount(countAmount);
        console.log(countAmount);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (localStorage.getItem("user")) {
    return (
      <div>
        <SidenavPharmacist></SidenavPharmacist>
        <div class="container">
          <div class="row">
            <div class="four col-md-3">
              <div class="counter-box">
                {" "}
                <i class="fa fa-group"></i>{" "}
                <span class="counter">{countReviews}</span>
                <p>Inventory Records</p>
              </div>
            </div>
            <div class="four col-md-3">
              <div class="counter-box">
                {" "}
                <i class="fa fa-shopping-cart"></i>{" "}
                <span class="counter">{countDonations}</span>
                <p>Prescription List</p>
              </div>
            </div>
            <div class="four col-md-3">
              <div class="counter-box">
                {" "}
                <i class="fa fa-shopping-cart"></i>{" "}
                <span class="counter">{countRequest}</span>
                <p>Medicine Request</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>You cannot access this page.</div>;
  }
};
export default DashboardPharmacist;
