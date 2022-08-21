import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import Sidenav from "./Sidenav";
import axios from "axios";
import SidenavPharmacist from "./SidenavPharmacist";

const Changestatus = () => {
  const history = useHistory();
  const { id } = useParams();
  const { status } = useParams();
  let [email, setEmail] = useState("");
  let [donations, setDonations] = useState([]);
  let [sum, setSum] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      var obj = JSON.parse(localStorage.getItem("user"));
      setEmail(obj.email);
    }

    var obj = { id: id, status: status };
    console.log(obj);

    axios
      .post("/pharmacist/changestatus", obj)
      .then((resp) => {
        setDonations(resp.data);

        console.log(resp.data);
        history.push("/ManageStockPharmacist");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <SidenavPharmacist></SidenavPharmacist>
      <div className="donation-container"></div>
    </div>
  );
};

export default Changestatus;
