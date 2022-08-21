import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SideBar from "./sidebar";
import TopNav from "./topnav";
import Footer from './footer';

const CustomerDetails = () => {
    const [customer, setCustomer] = useState([]);
    let { name } = useParams();
    let url = "http://127.0.0.1:8000/api/customer/"+name;
    useEffect(() => {
        axios.get(url)
            .then(resp => {
                console.log(resp.data);
                setCustomer(resp.data);

            }).catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div class="main-wrapper">
            <div class="page-wrapper">
                {/* <SideBar /> */}
                <TopNav />
                <div class="page-content">
                    <div class="row">
                        <div class="col-lg-12 grid-margin stretch-card">
                        <div class="card">
                                <div class="col-md-12 grid-margin">
                                    <div class="card rounded d-flex justify-content-center p-3">
                                        <div class="card-body">
                                            <h6 class="card-title">Customer Details</h6>
                                            <form>
                                                <div class="mb-3">
                                                    <label for="name" class="form-label">Name</label>
                                                    <input type="text" class="form-control" id="name" disabled value={customer.name}/>
                                                </div>

                                                <div class="mb-3">
                                                    <label for="phone" class="form-label">Phone</label>
                                                    <input type="text" class="form-control" id="phone" disabled value={customer.phone}/>
                                                </div>

                                                <div class="mb-3">
                                                    <label for="email" class="form-label">Email</label>
                                                    <input type="text" class="form-control" id="email" disabled value={customer.email}/>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer/>


            </div>
        </div>
    )

}

export default CustomerDetails;