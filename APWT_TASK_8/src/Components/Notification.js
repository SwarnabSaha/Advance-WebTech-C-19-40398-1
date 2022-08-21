import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/style.css";
import { useHistory } from "react-router";
import Top from "./Top";
import Sidenav from "./Sidenav";
import { Link, useParams } from "react-router-dom";

const Notification = () => {
  const { email } = useParams();
  const history = useHistory();
  let [projects, setProjects] = useState([]);

  let [password, setPassword] = useState("");
  let [search, setSearch] = useState("");
  let [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/allnotification")
      .then((resp) => {
        setProjects(resp.data);
        console.log(projects);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchSubmit = () => {
    var obj = { search: search, email: email };

    axios
      .post("/searcharea", obj)
      .then((resp) => {
        console.log(resp.data);

        if (resp.data.length != 0) {
          setProjects(resp.data);
          setError("");
        } else {
          setProjects(resp.data);
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
      <Sidenav></Sidenav>
      <div className="projectdetails-container">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search by Area"
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

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Address</th>
              <th scope="col">Status</th>

              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr id={project.id}>
                <td>{project.name}</td>
                <td>{project.amount}</td>
                <td>{project.address}</td>
                <td>{project.status}</td>

                <td>
                  {project.status == "No Response" ? (
                    <Link
                      className="btn btn-success"
                      to={"/Changestatus/" + project.id + "/Processing"}
                    >
                      Accept
                    </Link>
                  ) : (
                    ""
                  )}
                  &nbsp;
                  {project.status == "No Response" ? (
                    <Link
                      className="btn btn-danger"
                      to={"/Changestatus/" + project.id + "/Rejected"}
                    >
                      Reject
                    </Link>
                  ) : (
                    ""
                  )}
                  {project.status == "Processing" ? (
                    <Link
                      className="btn btn-primary"
                      to={"/Changestatus/" + project.id + "/Delivered"}
                    >
                      Delivered
                    </Link>
                  ) : (
                    ""
                  )}
                  &nbsp;
                  {project.status == "Processing" ? (
                    <Link
                      className="btn btn-danger"
                      to={"/Changestatus/" + project.id + "/Cancelled"}
                    >
                      Cancel
                    </Link>
                  ) : (
                    ""
                  )}
                </td>
                <td>
                  {project.status == "approved" ? (
                    <Link
                      className="btn btn-info"
                      to={"/Reviews/" + project.id}
                    >
                      Reviews
                    </Link>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {error ? <div className="alert alert-danger">{error}</div> : ""}
      </div>
    </div>
  );
};
export default Notification;
