import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import Sidenav from "./Sidenav";
import axios from "axios";
import { Link } from "react-router-dom";
import SidenavPharmacist from "./SidenavPharmacist";

const ManageStockPharmacist = () => {
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
      .get("/pharmacist/allproduct")
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
              <th scope="col">Action</th>
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
                <td>
                  {donation.status == "available" ? (
                    <Link
                      className="btn btn-success"
                      to={
                        "/ChangestatusPharmacist/" +
                        donation.id +
                        "/unavailable"
                      }
                    >
                      Unavailable
                    </Link>
                  ) : (
                    ""
                  )}
                  &nbsp;
                  {donation.status == "unavailable" ? (
                    <Link
                      className="btn btn-danger"
                      to={"/ChangestatusPharmacist/" + donation.id + "/request"}
                    >
                      Request
                    </Link>
                  ) : (
                    ""
                  )}
                  &nbsp;
                  {donation.status == "unavailable" ? (
                    <Link
                      className="btn btn-primary"
                      to={
                        "/ChangestatusPharmacist/" + donation.id + "/available"
                      }
                    >
                      Available
                    </Link>
                  ) : (
                    ""
                  )}
                  &nbsp;
                  {donation.status == "Processing" ? (
                    <Link
                      className="btn btn-danger"
                      to={"/Changestatus/" + donation.id + "/Cancelled"}
                    >
                      Cancel
                    </Link>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageStockPharmacist;
