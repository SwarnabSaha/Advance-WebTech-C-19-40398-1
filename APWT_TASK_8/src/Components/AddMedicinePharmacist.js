import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/style.css";
import { useHistory } from "react-router";
import Top from "./Top";
import SidenavPharmacist from "./SidenavPharmacist";

const AddMedicinePharmacist = () => {
  const history = useHistory();
  let [token, setToken] = useState("");
  let [pname, setPname] = useState("");
  let [cname, setCname] = useState("");
  let [ctg, setCtg] = useState("");
  let [type, setType] = useState("");
  let [price, setPrice] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let [hasError1, setHasError1] = useState(true);
  let [hasError2, setHasError2] = useState(true);
  let [hasError3, setHasError3] = useState(true);
  let [hasError4, setHasError4] = useState(true);
  let [hasError5, setHasError5] = useState(true);
  let [hasError6, setHasError6] = useState(true);
  let [pnameError, setPnameError] = useState("");
  let [cnameError, setCnameError] = useState("");
  let [ctgError, setCtgError] = useState("");
  let [typeError, setTypeError] = useState("");
  let [priceError, setPriceError] = useState("");

  const loginSubmit = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (pname == "") {
      setPnameError("Product Name is required!");
      setHasError1(true);
    } else {
      setPnameError("");
      setHasError1(false);
    }

    if (cname == "") {
      setCnameError("Catagory Name is required!");
      setHasError2(true);
    } else {
      setCnameError("");
      setHasError2(false);
    }

    if (price == "") {
      setPriceError("Catagory Name is required!");
      setHasError3(true);
    } else {
      setCnameError("");
      setHasError3(false);
    }

    if (hasError1 == false && hasError2 == false && hasError3 == false) {
      var obj = {
        pname: pname,
        cname: cname,
        ctg: ctg,
        type: type,
        price: price,
        status: "available",
      };

      console.log(obj);

      axios
        .post("/pharmacist/addmedicine", obj)
        .then((resp) => {
          console.log(resp.data);
          history.push("/DashboardPharmacist");

          //setPosts(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //validation

  const validatePname = (e) => {
    setPname(e.target.value);

    if (pname == "") {
      setPnameError("Product is required!");
    } else {
      setPnameError("");
    }
  };

  const validateCname = (e) => {
    setCname(e.target.value);

    if (pname == "") {
      setCnameError("Product is required!");
    } else {
      setCnameError("");
    }
  };

  const validateCtg = (e) => {
    setCtg(e.target.value);

    if (ctg == "") {
      setCtgError("Product is required!");
    } else {
      setCtgError("");
    }
  };

  const validateType = (e) => {
    setType(e.target.value);

    if (pname == "") {
      setTypeError("Product is required!");
    } else {
      setTypeError("");
    }
  };

  const validatePrice = (e) => {
    setPrice(e.target.value);

    if (pname == "") {
      setPriceError("Product is required!");
    } else {
      setPriceError("");
    }
  };

  return (
    <div>
      <SidenavPharmacist></SidenavPharmacist>
      <div className="signin-container">
        <form>
          <div class="form-outline">
            <label class="form-label" for="formControlLg">
              Product Name:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={pname}
              onChange={validatePname}
            />
            {pnameError ? (
              <div className="alert alert-danger">{pnameError}</div>
            ) : (
              ""
            )}
          </div>

          <div class="form-outline">
            <label class="form-label" for="formControlLg">
              Company Name:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={cname}
              onChange={validateCname}
            />
            {cnameError ? (
              <div className="alert alert-danger">{cnameError}</div>
            ) : (
              ""
            )}
          </div>

          <div class="form-outline">
            <label class="form-label" for="formControlLg">
              Catagory:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={ctg}
              onChange={validateCtg}
            />
            {ctgError ? (
              <div className="alert alert-danger">{ctgError}</div>
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
              Price:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={price}
              onChange={validatePrice}
            />
            {priceError ? (
              <div className="alert alert-danger">{priceError}</div>
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
export default AddMedicinePharmacist;
