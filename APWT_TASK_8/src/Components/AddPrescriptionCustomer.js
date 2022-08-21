import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/style.css";
import { useHistory } from "react-router";
import Top from "./Top";
import SidenavPharmacist from "./SidenavPharmacist";
import SidenavCustomer from "./SidenavCustomer";

const AddPrescriptionCustomer = () => {
  const history = useHistory();
  let [token, setToken] = useState("");
  let [name, setName] = useState("");
  let [dob, setDob] = useState("");
  let [weight, setWeight] = useState("");
  let [type, setType] = useState("");
  let [ins, setIns] = useState("");
  let [sub, setSub] = useState("");
  let [address, setAddress] = useState("");
  let [error, setError] = useState("");
  let [hasError1, setHasError1] = useState(true);
  let [hasError2, setHasError2] = useState(true);
  let [hasError3, setHasError3] = useState(true);
  let [hasError4, setHasError4] = useState(true);
  let [hasError5, setHasError5] = useState(true);
  let [hasError6, setHasError6] = useState(true);
  let [nameError, setNameError] = useState("");
  let [dobError, setDobError] = useState("");
  let [weightError, setWeightError] = useState("");
  let [typeError, setTypeError] = useState("");
  let [insError, setInsError] = useState("");
  let [subError, setSubError] = useState("");
  let [addressError, setAddressError] = useState("");

  const loginSubmit = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (name == "") {
      setNameError(" Name is required!");
      setHasError1(true);
    } else {
      setNameError("");
      setHasError1(false);
    }

    if (dob == "") {
      setDobError("Date of Birth is required!");
      setHasError2(true);
    } else {
      setDobError("");
      setHasError2(false);
    }

    if (weight == "") {
      setWeightError("Catagory Name is required!");
      setHasError3(true);
    } else {
      setWeightError("");
      setHasError3(false);
    }

    if (type == "") {
      setTypeError("Type is required!");
      setHasError4(true);
    } else {
      setTypeError("");
      setHasError4(false);
    }

    if (ins == "") {
      setInsError("Ins is required!");
      setHasError5(true);
    } else {
      setInsError("");
      setHasError5(false);
    }

    if (sub == "") {
      setSubError("Sub is required!");
      setHasError6(true);
    } else {
      setSubError("");
      setHasError6(false);
    }

    if (
      hasError1 == false &&
      hasError2 == false &&
      hasError3 == false &&
      hasError4 == false &&
      hasError5 == false &&
      hasError6 == false
    ) {
      var obj = {
        name: name,
        dob: dob,
        weight: weight,
        type: type,
        ins: ins,
        sub: sub,
        address: address,
      };

      console.log(obj);

      axios
        .post("/customer/addprescription", obj)
        .then((resp) => {
          console.log(resp.data);
          history.push("/DashboardCustomer");

          //setPosts(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //validation

  const validateName = (e) => {
    setName(e.target.value);

    if (name == "") {
      setNameError("Product is required!");
    } else {
      setNameError("");
    }
  };

  const validateDob = (e) => {
    setDob(e.target.value);

    if (dob == "") {
      setDobError("Product is required!");
    } else {
      setDobError("");
    }
  };

  const validateWeight = (e) => {
    setWeight(e.target.value);

    if (weight == "") {
      setWeightError("Product is required!");
    } else {
      setWeightError("");
    }
  };

  const validateType = (e) => {
    setType(e.target.value);

    if (type == "") {
      setTypeError("Product is required!");
    } else {
      setTypeError("");
    }
  };

  const validateIns = (e) => {
    setIns(e.target.value);

    if (ins == "") {
      setInsError("Product is required!");
    } else {
      setInsError("");
    }
  };

  const validateSub = (e) => {
    setSub(e.target.value);

    if (sub == "") {
      setSubError("Product is required!");
    } else {
      setSubError("");
    }
  };

  const validateAddress = (e) => {
    setAddress(e.target.value);

    if (address == "") {
      setAddressError("Product is required!");
    } else {
      setAddressError("");
    }
  };

  return (
    <div>
      <SidenavCustomer></SidenavCustomer>
      <div className="signin-container">
        <form>
          <div class="form-outline">
            <label class="form-label" for="formControlLg">
              Name:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={name}
              onChange={validateName}
            />
            {nameError ? (
              <div className="alert alert-danger">{nameError}</div>
            ) : (
              ""
            )}
          </div>

          <div class="form-outline">
            <label class="form-label" for="formControlLg">
              Date of Birth:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={dob}
              onChange={validateDob}
            />
            {dobError ? (
              <div className="alert alert-danger">{dobError}</div>
            ) : (
              ""
            )}
          </div>

          <div class="form-outline">
            <label class="form-label" for="formControlLg">
              Weight:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={weight}
              onChange={validateWeight}
            />
            {weightError ? (
              <div className="alert alert-danger">{weightError}</div>
            ) : (
              ""
            )}
          </div>

          <div class="form-outline">
            <label class="form-label" for="formControlLg">
              Type:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={type}
              onChange={validateType}
            />
            {typeError ? (
              <div className="alert alert-danger">{typeError}</div>
            ) : (
              ""
            )}
          </div>

          <div class="form-outline">
            <label class="form-label" for="formControlLg">
              Ins:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={ins}
              onChange={validateIns}
            />
            {insError ? (
              <div className="alert alert-danger">{insError}</div>
            ) : (
              ""
            )}
          </div>

          <div class="form-outline">
            <label class="form-label" for="formControlLg">
              Sub:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={sub}
              onChange={validateSub}
            />
            {subError ? (
              <div className="alert alert-danger">{subError}</div>
            ) : (
              ""
            )}
          </div>

          <div class="form-outline">
            <label class="form-label" for="formControlLg">
              Address:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={address}
              onChange={validateAddress}
            />
            {addressError ? (
              <div className="alert alert-danger">{addressError}</div>
            ) : (
              ""
            )}
          </div>
        </form>
        <br></br>
        <button className="btn btn-primary" onClick={loginSubmit}>
          Add
        </button>
        <br />
        <br />
        {error ? <div className="alert alert-danger">{error}</div> : ""}
      </div>
    </div>
  );
};
export default AddPrescriptionCustomer;
