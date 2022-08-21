import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Signin from "./Components/Signin";
import Logout from "./Components/Logout";
import Dashboard from "./Components/Dashboard";
import DashboardPharmacist from "./Components/DashboardPharmacist";
import Homepage from "./Components/Homepage";

import Notification from "./Components/Notification";
import Changestatus from "./Components/Changestatus";
import History from "./Components/History";
import SigninPharmacist from "./Components/SigninPharmacist";
import ChangeInformation from "./Components/ChangeInformation";
import AddMedicinePharmacist from "./Components/AddMedicinePharmacist";
import AddPrescriptionCustomer from "./Components/AddPrescriptionCustomer";
import RequestMedicinePharmacist from "./Components/RequestMedicinePharmacist";
import ManageStockPharmacist from "./Components/ManageStockPharmacist";
import ChangestatusPharmacist from "./Components/ChangestatusPharmacist";
import ChangeInformationPharmacist from "./Components/ChangeInformationPharmacist";
import ChangeInformationCustomer from "./Components/ChangeInformationCustomer";
import ChangeInformationAdmin from "./Components/ChangeInformationAdmin";
import SigninCustomer from "./Components/SigninCustomer";
import DashboardCustomer from "./Components/DashboardCustomer";
import ProductCustomer from "./Components/ProductCustomer";
import AddtoCartCustomer from "./Components/AddtoCartCustomer";
import ShowCartCustomer from "./Components/ShowCartCustomer";
import RemoveCartCustomer from "./Components/RemoveCartCustomer";
import ConfirmOrderCustomer from "./Components/ConfirmOrderCustomer";
import OrderDetailsCustomer from "./Components/OrderDetailsCustomer";
import SigninAdmin from "./Components/SigninAdmin";
import DashboardAdmin from "./Components/DashboardAdmin";
import CustomerAdmin from "./Components/CustomerAdmin";
import ChangeInformationCustomerAdmin from "./Components/ChangeInformationCustomerAdmin";
import ChangestatusCustomerAdmin from "./Components/ChangestatusCustomerAdmin";
import Contact from "./Components/Contact";
import FeedbackAdmin from "./Components/FeedbackAdmin";
import SignupAdmin from "./Components/SignupAdmin";

var token = null;

if (localStorage.getItem("user")) {
  var obj = JSON.parse(localStorage.getItem("user"));
  token = obj.access_token;
  console.log(token);
}

axios.defaults.headers.common["Authorization"] = token;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/Signin">
          <Signin />
        </Route>

        <Route exact path="/RequestMedicinePharmacist">
          <RequestMedicinePharmacist />
        </Route>

        <Route exact path="/ManageStockPharmacist">
          <ManageStockPharmacist />
        </Route>

        <Route exact path="/ChangeInformationPharmacist">
          <ChangeInformationPharmacist />
        </Route>

        <Route exact path="/ChangeInformationCustomer">
          <ChangeInformationCustomer />
        </Route>
        <Route exact path="/ChangeInformationAdmin">
          <ChangeInformationAdmin />
        </Route>

        <Route exact path="/SignupAdmin">
          <SignupAdmin />
        </Route>

        <Route exact path="/SigninPharmacist">
          <SigninPharmacist />
        </Route>

        <Route exact path="/SigninCustomer">
          <SigninCustomer />
        </Route>

        <Route exact path="/CustomerAdmin">
          <CustomerAdmin />
        </Route>

        <Route exact path="/ChangeInformationCustomerAdmin/:id">
          <ChangeInformationCustomerAdmin />
        </Route>

        <Route exact path="/AddMedicinePharmacist">
          <AddMedicinePharmacist />
        </Route>

        <Route exact path="/AddPrescriptionCustomer">
          <AddPrescriptionCustomer />
        </Route>
        <Route exact path="/AddtoCartCustomer/:id">
          <AddtoCartCustomer />
        </Route>

        <Route exact path="/RemoveCartCustomer/:id">
          <RemoveCartCustomer />
        </Route>

        <Route exact path="/ShowCartCustomer">
          <ShowCartCustomer />
        </Route>
        <Route exact path="/ConfirmOrderCustomer">
          <ConfirmOrderCustomer />
        </Route>
        <Route exact path="/OrderDetailsCustomer">
          <OrderDetailsCustomer />
        </Route>

        <Route exact path="/Logout">
          <Logout />
        </Route>
        <Route exact path="/Dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/DashboardPharmacist">
          <DashboardPharmacist />
        </Route>
        <Route exact path="/DashboardCustomer">
          <DashboardCustomer />
        </Route>
        <Route exact path="/ProductCustomer">
          <ProductCustomer />
        </Route>

        <Route exact path="/ChangeInformation">
          <ChangeInformation></ChangeInformation>
        </Route>

        <Route exact path="/Notification">
          <Notification></Notification>
        </Route>
        <Route exact path="/History">
          <History></History>
        </Route>
        <Route exact path="/Homepage">
          <Homepage></Homepage>
        </Route>

        <Route exact path="/Changestatus/:id/:status">
          <Changestatus></Changestatus>
        </Route>
        <Route exact path="/ChangestatusCustomerAdmin/:id/:status">
          <ChangestatusCustomerAdmin></ChangestatusCustomerAdmin>
        </Route>
        <Route exact path="/Contact">
          <Contact></Contact>
        </Route>

        <Route exact path="/FeedbackAdmin">
          <FeedbackAdmin></FeedbackAdmin>
        </Route>

        <Route exact path="/SigninAdmin">
          <SigninAdmin></SigninAdmin>
        </Route>

        <Route exact path="/DashboardAdmin">
          <DashboardAdmin></DashboardAdmin>
        </Route>

        <Route exact path="/ChangestatusPharmacist/:id/:status">
          <ChangestatusPharmacist></ChangestatusPharmacist>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
