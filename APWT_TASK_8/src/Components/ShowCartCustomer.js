import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import Sidenav from "./Sidenav";
import axios from "axios";
import SidenavCustomer from "./SidenavCustomer";
import { Button } from "bootstrap";

const ShowCartCustomer = () => {
  let [email, setEmail] = useState("");
  let [donations, setDonations] = useState([]);
  let [countReviews, setCountReviews] = useState(0);
  let [sum, setSum] = useState(0);
  let [id, setId] = useState("");
  let [flag, setFlag] = useState(true);

  useEffect(() => {
    axios
      .get("/customer/allcart")
      .then((resp) => {
        setDonations(resp.data);
        if (resp.data.length > 0) {
          setFlag(false);
        }
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
              <th scope="col">Price</th>
              <th scope="col">Piece</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr id={donation.id}>
                <td>{donation.name}</td>
                <td>{donation.price}</td>
                <td>{donation.number}</td>
                <td>{donation.description}</td>
                <td>
                  {" "}
                  <Link
                    className="btn btn-danger"
                    to={"/RemoveCartCustomer/" + donation.id}
                  >
                    Remove
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {donations.length != 0 ? (
          <Link className="btn btn-success" to={"/ConfirmOrderCustomer"}>
            Onfirm Order
          </Link>
        ) : (
          "Cart is Empty"
        )}
      </div>
    </div>
  );
};

export default ShowCartCustomer;
