import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import Sidenav from "./Sidenav";
import axios from "axios";
import SidenavAdmin from "./SidenavAdmin";

const FeedbackAdmin = () => {
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
      .get("/admin/allcomment")
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
      <SidenavAdmin></SidenavAdmin>
      <div className="donation-container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Comment</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr id={donation.id}>
                <td>{donation.name}</td>
                <td>{donation.email}</td>
                <td>{donation.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeedbackAdmin;
