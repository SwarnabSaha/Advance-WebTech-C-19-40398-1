import React from "react";
import { Link } from "react-router-dom";

const Customer = (props)=>{

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td><Link to={"/customer/" + props.name}><a href='#' class='btn btn-primary btn-icon-text'>Details</a></Link></td>
        </tr>
    )

}
export default Customer;