import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/style.css";
import { useHistory } from "react-router";
import Top from "./Top";
import SidenavPharmacist from "./SidenavPharmacist";
import SidenavCustomer from "./SidenavCustomer";
import TopAdmin from "./TopAdmin";

const SignupAdmin = () => {
  const history = useHistory();
  let [token, setToken] = useState("");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmpass, setConfirmpass] = useState("");
  let [username, setUsername] = useState("");

  let [hasError1, setHasError1] = useState(true);
  let [hasError2, setHasError2] = useState(true);
  let [hasError3, setHasError3] = useState(true);
  let [hasError4, setHasError4] = useState(true);
  let [hasError5, setHasError5] = useState(true);
  let [hasError6, setHasError6] = useState(true);
  let [nameError, setNameError] = useState("");
  let [emailError, setEmailError] = useState("");
  let [usernameError, setUsernameError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let [error, setError] = useState("");
  let [confirmpassError, setConfirmpassError] = useState("");

  const loginSubmit = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    console.log("in");

    if (name == "") {
      setNameError(" Name is required!");
      setHasError1(true);
    } else {
      setNameError("");
      setHasError1(false);
    }

    if (email == "") {
      setEmailError("Email is required!");
      setHasError2(true);
    } else {
      setEmailError("");
      setHasError2(false);
    }

    if (username == "") {
      setUsernameError("Username is required!");
      setHasError3(true);
    } else {
      setUsernameError("");
      setHasError3(false);
    }

    if (password == "") {
      setPasswordError("Password is required!");
      setHasError4(true);
    } else {
      setPasswordError("");
      setHasError4(false);
    }

    if (confirmpass == "") {
      setConfirmpassError("Confirm Password is required!");
      setHasError5(true);
    } else {
      setConfirmpassError("");
      setHasError5(false);
    }

    if (
      hasError1 == false &&
      hasError2 == false &&
      hasError3 == false &&
      hasError4 == false &&
      hasError5 == false
    ) {
      var obj = {
        name: name,
        username: username,
        email: email,
        password: password,
        confirmpass: confirmpass,
      };

      console.log(obj);

      axios
        .post("/admin/addadmin", obj)
        .then((resp) => {
          console.log(resp.data);
          history.push("/SigninAdmin");

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
      setNameError("Name is required!");
    } else {
      setNameError("");
    }
  };

  const validateEmail = (e) => {
    setEmail(e.target.value);

    if (email == "") {
      setEmailError("Email is required!");
    } else {
      setEmailError("");
    }
  };

  const validateUsername = (e) => {
    setUsername(e.target.value);

    if (username == "") {
      setUsernameError("Username is required!");
    } else {
      setUsernameError("");
    }
  };

  const validatePassword = (e) => {
    setPassword(e.target.value);

    if (password == "") {
      setPasswordError("password is required!");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmpass = (e) => {
    setConfirmpass(e.target.value);

    if (confirmpass == "") {
      setConfirmpassError("Password is required!");
    } else {
      setConfirmpassError("");
    }
  };

  return (
    <div>
      <TopAdmin></TopAdmin>
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
              Email:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={email}
              onChange={validateEmail}
            />
            {emailError ? (
              <div className="alert alert-danger">{emailError}</div>
            ) : (
              ""
            )}
          </div>

          <div class="form-outline">
            <label class="form-label" for="formControlLg">
              Username:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={username}
              onChange={validateUsername}
            />
            {usernameError ? (
              <div className="alert alert-danger">{usernameError}</div>
            ) : (
              ""
            )}
          </div>

          <div class="form-outline">
            <label class="form-label" for="formControlLg">
              Password:
            </label>
            <input
              className="form-control form-control-lg"
              type="password"
              value={password}
              onChange={validatePassword}
            />
            {passwordError ? (
              <div className="alert alert-danger">{passwordError}</div>
            ) : (
              ""
            )}
          </div>

          <div class="form-outline">
            <label class="form-label" for="formControlLg">
              Confirm Password:
            </label>
            <input
              className="form-control form-control-lg"
              type="password"
              value={confirmpass}
              onChange={validateConfirmpass}
            />
            {confirmpassError ? (
              <div className="alert alert-danger">{confirmpassError}</div>
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
export default SignupAdmin;
