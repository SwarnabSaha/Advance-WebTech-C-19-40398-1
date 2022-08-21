import react from "react";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import "../assets/css/style.css";
import { useHistory } from "react-router";
import Sidenav from "./Sidenav";

const ChangeInformation = () => {
  const { id } = useParams();
  const history = useHistory();
  let [pass, setPass] = useState([]);
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [phone, setPhone] = useState(0);
  let [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      var obj = JSON.parse(localStorage.getItem("user"));
      setPass(obj);
      console.log(obj);
    }

    axios
      .post("/information", obj)
      .then((resp) => {
        setName(resp.data.i_name);
        setAddress(resp.data.i_address);
        setPhone(resp.data.i_phone);
        setEmail(resp.data.i_email);

        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const EditSubmit = () => {
    var obj = {
      i_email: email,
      i_name: name,
      i_phone: phone,
      i_address: address,
    };
    console.log(obj);
    axios
      .post("/changeinformation", obj)
      .then((resp) => {
        history.push("/Dashboard");
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Sidenav></Sidenav>
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
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div class="form-outline">
            <label class="form-label" for="formControlLg">
              Address:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
export default ChangeInformation;
