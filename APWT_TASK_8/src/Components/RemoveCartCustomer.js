import react from "react";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import "../assets/css/style.css";
import { useHistory } from "react-router";
import Sidenav from "./Sidenav";
import SidenavCustomer from "./SidenavCustomer";

const RemoveCartCustomer = () => {
  const { id } = useParams();
  const history = useHistory();
  let [cart, setcart] = useState([]);
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [phone, setPhone] = useState(0);
  let [error, setError] = useState("");

  useEffect(() => {
    var object = { id: id };

    axios
      .post("/customer/removecart", object)
      .then((resp) => {})
      .catch((err) => {
        console.log(err);
      });

    history.push("/ShowCartCustomer");
  }, []);

  return (
    <div>
      <SidenavCustomer></SidenavCustomer>
      Cart is empty
    </div>
  );
};
export default RemoveCartCustomer;
