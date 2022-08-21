import react from "react";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import "../assets/css/style.css";
import { useHistory } from "react-router";
import Sidenav from "./Sidenav";
import SidenavPharmacist from "./SidenavPharmacist";
import SidenavCustomer from "./SidenavCustomer";

const ChangesInformationCustomer = () => {
  const { id } = useParams();
  const history = useHistory();
  let [pass, setPass] = useState([]);
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [phone, setPhone] = useState("");
  let [dob, setDob] = useState("");
  let [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      var obj = JSON.parse(localStorage.getItem("user"));
      setEmail(obj.username);
      console.log(obj);
    }

    axios
      .post("/customer/information", obj)
      .then((resp) => {
        setName(resp.data.name);

        setPhone(resp.data.phone);
        setDob(resp.data.dob);

        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const EditSubmit = () => {
    var obj = {
      username: email,
      name: name,
      phone: phone,
      dob: dob,
    };
    console.log(obj);
    axios
      .post("/customer/changeinformation", obj)
      .then((resp) => {
        history.push("/DashboardCustomer");
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <SidenavCustomer></SidenavCustomer>
      <div className="signin-container">
        <form>
          <div class="form-outline">
            <label class="form-label" for="formControlLg">
              Name
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div class="form-outline">
            <label class="form-label" for="formControlLg">
              Phone:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div class="form-outline">
            <label class="form-label" for="formControlLg">
              Date of Birth:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
        </form>
        <br></br>
        <button className="btn btn-primary" onClick={EditSubmit}>
          Confirm
        </button>
        <br />
        <br />
        {error ? <div className="alert alert-danger">{error}</div> : ""}
      </div>
    </div>
  );
};
export default ChangesInformationCustomer;
