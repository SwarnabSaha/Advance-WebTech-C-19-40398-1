import React, { useState, useEffect } from "react";
import "../assets/css/dashboard.css";
import "../assets/css/counter.css";
import { Link } from "react-router-dom";

import Logout from "./Logout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SidenavPharmacist from "./SidenavPharmacist";
import { useHistory } from "react-router";
import axios from "axios";
import SidenavAdmin from "./SidenavAdmin";

const DashboardAdmin = () => {
  let [countCustomer, setCountCustomer] = useState(0);
  let [countFeedback, setCountFeedback] = useState(0);
  let [countOrder, setCountOrder] = useState(0);
  let [countAmount, setCountAmount] = useState(0);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("/admin/allcustomer")
      .then((resp) => {
        setCountCustomer(resp.data.length);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/admin/allcomment")
      .then((resp) => {
        setCountFeedback(resp.data.length);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/admin/allorder")
      .then((resp) => {
        setCountOrder(resp.data.length);
        resp.data.forEach(
          (element) =>
            (countAmount = parseInt(countAmount) + parseInt(element.price))
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
        <SidenavAdmin></SidenavAdmin>

        <div class="container">
          <div class="row">
            <div class="four col-md-3">
              <div class="counter-box">
                {" "}
                <i class="fa fa-group"></i>{" "}
                <span class="counter">{countCustomer}</span>
                <p>Number of Customer</p>
              </div>
            </div>
            <div class="four col-md-3">
              <div class="counter-box">
                {" "}
                <i class="fa fa-shopping-cart"></i>{" "}
                <span class="counter">{countFeedback}</span>
                <p>Number of Feedback</p>
              </div>
            </div>
            <div class="four col-md-3">
              <div class="counter-box">
                {" "}
                <i class="fa fa-shopping-cart"></i>{" "}
                <span class="counter">{countOrder}</span>
                <p>Number of Order</p>
              </div>
            </div>
            <div class="four col-md-3">
              <div class="counter-box">
                {" "}
                <i class="fa fa-shopping-cart"></i>{" "}
                <span class="counter">{countAmount}</span>
                <p>Total Sale Amount</p>
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
export default DashboardAdmin;
