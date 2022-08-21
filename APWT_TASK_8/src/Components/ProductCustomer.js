import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import Sidenav from "./Sidenav";
import axios from "axios";
import SidenavCustomer from "./SidenavCustomer";
import { Button } from "bootstrap";

const ProductCustomer = () => {
  let [email, setEmail] = useState("");
  let [donations, setDonations] = useState([]);
  let [countReviews, setCountReviews] = useState(0);
  let [sum, setSum] = useState(0);
  let [id, setId] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      var obj = JSON.parse(localStorage.getItem("user"));
      setEmail(obj.email);
    }

    axios
      .get("/customer/allproduct")
      .then((resp) => {
        setDonations(resp.data);
        setCountReviews(resp.data.length);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <SidenavCustomer></SidenavCustomer>
      <div className="donation-container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr id={donation.id}>
                <td>{donation.name}</td>
                <td>{donation.price}</td>
                <td>{donation.description}</td>
                <td>
                  {" "}
                  <Link
                    className="btn btn-success"
                    to={"/AddtoCartCustomer/" + donation.id}
                  >
                    Add to Cart
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductCustomer;
