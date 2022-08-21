import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import SidenavAdmin from "./SidenavAdmin";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const CustomerAdmin = () => {
  const { id } = useParams();
  let [email, setEmail] = useState("");
  let [donations, setDonations] = useState([]);
  let [countReviews, setCountReviews] = useState(0);
  let [sum, setSum] = useState(0);
  let [search, setSearch] = useState("");
  let [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      var obj = JSON.parse(localStorage.getItem("user"));
      setEmail(obj.email);
    }

    axios
      .get("/admin/allcustomer")
      .then((resp) => {
        setDonations(resp.data);

        console.log(donations);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchSubmit = () => {
    var obj = { search: search, email: email };

    axios
      .post("/admin/searchcustomer", obj)
      .then((resp) => {
        console.log(resp.data);

        if (resp.data.length != 0) {
          setDonations(resp.data);
          setError("");
        } else {
          setDonations(resp.data);
          setError("No data found");
        }

        //setPosts(resp.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(email);
      });
  };

  return (
    <div>
      <SidenavAdmin></SidenavAdmin>
      <div className="donation-container">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search by Name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              onClick={searchSubmit}
            >
              Search
            </button>
          </div>
        </div>
        <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-success mb-3"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export Data to Excel Sheet"/>

        <table class="table" id="table-to-xls">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr id={donation.id}>
                <td>{donation.name}</td>
                <td>{donation.phone}</td>
                <td>{donation.email}</td>
                <td>{donation.status}</td>
                <td>
                  <Link
                    className="btn btn-success"
                    to={"/ChangeInformationCustomerAdmin/" + donation.id}
                  >
                    Edit
                  </Link>
                  &nbsp;&nbsp;{" "}
                  {donation.status == "active" ? (
                    <Link
                      className="btn btn-danger"
                      to={
                        "/ChangestatusCustomerAdmin/" + donation.id + "/block"
                      }
                    >
                      Block
                    </Link>
                  ) : (
                    ""
                  )}
                  &nbsp;&nbsp;{" "}
                  {donation.status == "block" ? (
                    <Link
                      className="btn btn-primary"
                      to={
                        "/ChangestatusCustomerAdmin/" + donation.id + "/active"
                      }
                    >
                      Unblock
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

export default CustomerAdmin;
