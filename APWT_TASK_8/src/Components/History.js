import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import Sidenav from "./Sidenav";
import axios from "axios";

const History = () => {
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
      .get("/allhistory")
      .then((resp) => {
        setDonations(resp.data);
        setCountReviews(resp.data.length);

        console.log(donations);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Sidenav></Sidenav>
      <div className="donation-container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Address</th>
              <th scope="col">Time</th>
              <th scope="col">Taka</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr id={donation.id}>
                <td>{donation.name}</td>
                <td>{donation.amount}</td>
                <td>{donation.address}</td>
                <td>{donation.time}</td>
                <td>50 BDT</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>{50 * countReviews} BDT</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
