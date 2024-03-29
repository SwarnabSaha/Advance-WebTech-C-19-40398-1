import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/style.css";
import { useHistory } from "react-router";
import TopPharmacist from "./TopPharmacist";

const SigninPharmacist = () => {
  const history = useHistory();
  let [token, setToken] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let [hasError1, setHasError1] = useState(true);
  let [hasError2, setHasError2] = useState(true);

  const loginSubmit = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (username == "") {
      setUsernameError("Email is required!");
      setHasError1(true);
    } else {
      setUsernameError("");
      setHasError1(false);
    }

    if (password == "") {
      setPasswordError("Password is required");
      setHasError2(true);
    } else if (password.length < 6) {
      setPasswordError("Password must contain at least 6 charcters");
      setHasError2(true);
    } else {
      setPasswordError("");
      setHasError2(false);
    }

    if (hasError1 == false && hasError2 == false) {
      var obj = { username: username, password: password };

      axios
        .post("/signin", obj)
        .then((resp) => {
          var token = resp.data;
          var user = { username: token.email, access_token: token.token };
          localStorage.setItem("user", JSON.stringify(user));
          console.log(localStorage.getItem("user"));
          console.log(resp.data);
          if (token.token != null) {
            history.push("/DashboardPharmacist");
          } else {
            setError("Invalid Username or Password");
          }

          //setPosts(resp.data);
        })
        .catch((err) => {
          console.log(err);
          console.log(username);
        });
    }
  };

  //validation

  let [usernameError, setUsernameError] = useState("");
  let [passwordError, setPasswordError] = useState("");

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
      setPasswordError("Password is required");
    } else if (password.length < 6) {
      setPasswordError("Password must contain at least 6 charcters");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div>
      <TopPharmacist></TopPharmacist>
      <div className="signin-container">
        <form>
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
            <label class="form-label" for="formControlDefault">
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
        </form>
        <br></br>
        <button className="btn btn-primary" onClick={loginSubmit}>
          Login
        </button>
        <br />
        <br />
        {error ? <div className="alert alert-danger">{error}</div> : ""}
      </div>
    </div>
  );
};
export default SigninPharmacist;
