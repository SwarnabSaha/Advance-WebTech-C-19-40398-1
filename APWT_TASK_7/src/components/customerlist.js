import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'

export default function List() {

    const [customer, setCustomer] = useState([])

    useEffect(()=>{
        fetchCustomer();
    },[])

    const fetchCustomer = async () => {
        await axios.get(`http://localhost:8000/api/customerinfo/info`).then(({data})=>{
            setCustomer(data);
        })
    }
    // const deleteProduct = async (id) => {
    //     const isConfirm = await Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //       }).then((result) => {
    //         return result.isConfirmed
    //       });

    //       if(!isConfirm){
    //         return;
    //       }

    //       await axios.delete(`http://localhost:8000/api/products/${id}`).then(({data})=>{
    //         Swal.fire({
    //             icon:"success",
    //             text:data.message
    //         })
    //         fetchProducts()
    //       }).catch(({response:{data}})=>{
    //         Swal.fire({
    //             text:data.message,
    //             icon:"error"
    //         })
    //       })
    // }
    const Customer = (props)=>{
    return (
      <div className="container">
          <div className="row">
            <div className='col-12'>
                <Link className='btn btn-primary mb-2 float-end' to={""}>
                    Create Product
                </Link>
            </div>
            <div className="col-12">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                <th>NAME</th>
                                <th>PHONE</th>
                                <th>EMAIL</th>
                                <th colspan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    customer.length > 0 && (
                                        customer.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{props.name}</td>
                                                <td>{props.phone}</td>
                                                <td>{props.email}</td>
                                                <td>
                                                    <Link to={`/customerinfo/edit/${props.id}`} className='btn btn-success me-2'>
                                                        Edit
                                                    </Link>
                                                    {/* <Button variant="danger" onClick={()=>deleteProduct(row.id)}>
                                                        Delete
                                                    </Button> */}
                                                </td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
}

}
