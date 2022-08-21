import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../assets/css/style.css";
import { useHistory } from "react-router";
import Top from "./Top";
import SidenavPharmacist from "./SidenavPharmacist";
import TopAdmin from "./TopAdmin";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";


const Contact = () => {
  const form = useRef();
  const history = useHistory();
  let [token, setToken] = useState("");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [comment, setComment] = useState("");

  let [error, setError] = useState("");
  let [hasError1, setHasError1] = useState(true);
  let [hasError2, setHasError2] = useState(true);
  let [hasError3, setHasError3] = useState(true);

  let [nameError, setNameError] = useState("");
  let [emailError, setEmailError] = useState("");
  let [commentError, setCommentError] = useState("");

  
  const loginSubmit = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

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

    if (comment == "") {
      setCommentError("Catagory Name is required!");
      setHasError3(true);
    } else {
      setCommentError("");
      setHasError3(false);
    }

    if (hasError1 == false && hasError2 == false && hasError3 == false) {
      var obj = {
        name: name,
        email: email,
        comment: comment,
      };

      console.log(obj);

      axios
        .post("/admin/addcomment", obj)
        .then((resp) => {
          console.log(resp.data);
          history.push("/Homepage");

          //setPosts(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    emailjs.sendForm('service_gbxb4lb', 'template_kesunl7', form.current, '6wA1bAPLHnD37wCW0')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
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

  const validateComment = (e) => {
    setComment(e.target.value);

    if (comment == "") {
      setCommentError("Comment is required!");
    } else {
      setCommentError("");
    }
  };


  return (
    <div>
      <TopAdmin></TopAdmin>
      <div className="signin-container">
        <form ref={form} >
          <div class="form-outline">
            <label class="form-label" for="formControlLg">
              Name:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={name}
              onChange={validateName}
              name="name"
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
              name="email"
            />
            {emailError ? (
              <div className="alert alert-danger">{emailError}</div>
            ) : (
              ""
            )}
          </div>

          <div class="form-outline">
            <label class="form-label" for="formControlLg">
              Comment:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={comment}
              onChange={validateComment}
              name="comment"
            />
            {commentError ? (
              <div className="alert alert-danger">{commentError}</div>
            ) : (
              ""
            )}
          </div>
        </form>
        <br></br>
        <button type="submit" className="btn btn-primary" onClick={loginSubmit}>
          Submit
        </button>
        <br />
        <br />
        {error ? <div className="alert alert-danger">{error}</div> : ""}
      </div>
    </div>
  );
};
export default Contact;
