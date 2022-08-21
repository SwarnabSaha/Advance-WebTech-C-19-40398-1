import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import Sidenav from "./Sidenav";
import axios from "axios";
import SidenavCustomer from "./SidenavCustomer";

const OrderDetailsCustomer = () => {
  const { id } = useParams();
  let [email, setEmail] = useState("");
  let [donations, setDonations] = useState([]);
  let [countReviews, setCountReviews] = useState(0);
  let [sum, setSum] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      var obj = JSON.parse(localStorage.getItem("user"));
      setEmail(obj.email);
    }

    axios
      .get("/customer/orderdetails")
      .then((resp) => {
        setDonations(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <SidenavCustomer></SidenavCustomer>
      <div className="donation-container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">price</th>
              <th scope="col">Piece</th>
              <th scope="col">Time of Order</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr id={donation.id}>
                <td>{donation.name}</td>
                <td>{donation.price}</td>
                <td>{donation.number}</td>
                <td>{donation.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetailsCustomer;
