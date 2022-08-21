import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import Sidenav from "./Sidenav";
import axios from "axios";
import SidenavPharmacist from "./SidenavPharmacist";

const RequestMedicinePharmacist = () => {
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
      .get("/pharmacist/requestproduct")
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
      <SidenavPharmacist></SidenavPharmacist>
      <div className="donation-container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Company Name</th>
              <th scope="col">Catagory</th>
              <th scope="col">Type</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr id={donation.id}>
                <td>{donation.pname}</td>
                <td>{donation.cname}</td>
                <td>{donation.ctg}</td>
                <td>{donation.type}</td>
                <td>{donation.price}</td>
                <td>{donation.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestMedicinePharmacist;
