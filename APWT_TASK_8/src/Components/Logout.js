import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const Logout = () => {
  let history = useHistory();
  let [count, setCount] = useState(0);
  let [demo, setdemo] = useState(-10000);
  let [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      var obj = JSON.parse(localStorage.getItem("user"));
      setReviews(obj);
    }
    axios
      .post("/logout", reviews)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });

    localStorage.removeItem("user");
    history.push("/Homepage");
  }, []);

  return <div>Logout</div>;
};

export default Logout;
