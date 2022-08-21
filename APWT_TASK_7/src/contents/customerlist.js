import React, { useState, useEffect } from "react";
import axios from "axios";
// import SideBar from "./sidebar";
import TopNav from "./topnav";
import List from './customer';
import Footer from './footer';





const CustomerList = () => {
    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/customer/list")
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
                                <div class="card-body">
                                    <h4 class="card-title">Customer List</h4>
                                    <div class="table-responsive">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                <th>NAME</th>
                                                <th>PHONE</th>
                                                <th>EMAIL</th>
                                                <th colspan="2">Action</th>
                                                <th></th>
                                                </tr>
                                            </thead>
                                            <tbody id="tableBody">
                                                <tr>
                                                </tr>
                                                {
                                                    customer.map(customer => (
                                                        <List name={customer.name} phone={customer.phone} email={customer.email}></List>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
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
export default CustomerList;