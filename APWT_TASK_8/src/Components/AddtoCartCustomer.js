import react from "react";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import "../assets/css/style.css";
import { useHistory } from "react-router";
import Sidenav from "./Sidenav";

const AddtoCartCustomer = () => {
  const { id } = useParams();
  const history = useHistory();
  let [cart, setCart] = useState([]);
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [phone, setPhone] = useState(0);
  let [error, setError] = useState("");

  useEffect(() => {
    var object = { id: id };

    axios
      .post("/customer/addtocart", object)
      .then((resp) => {
        // setCart(resp.data);
        // var flag = true;
        // if (localStorage.getItem("cart")) {
        //   var data = JSON.parse(localStorage.getItem("cart"));
        //   setCart(data);
        //   console.log(data);

        //   data.forEach((el) => {
        //     if (el.id == resp.data.id) {
        //       flag = false;
        //       console.log("flase");
        //     }
        //   });

        //   if (flag == true) {
        //     data.push(resp.data);
        //   }
        //   localStorage.setItem("cart", JSON.stringify(cart));
        // } else {
        //   localStorage.setItem("cart", JSON.stringify(cart));
        // }

        // var show = JSON.parse(localStorage.getItem("cart"));
        // console.log(cart);

        // console.log(resp.data);

        // localStorage.setItem("cart", JSON.stringify(resp.data));
        // var cart = JSON.parse(localStorage.getItem("cart"));
        // console.log(cart);

        history.push("/ProductCustomer");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div></div>;
};
export default AddtoCartCustomer;
