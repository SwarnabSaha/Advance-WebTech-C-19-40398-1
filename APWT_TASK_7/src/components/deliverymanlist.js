import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'

export default function List() {

    const [deliveryman, setDelivery] = useState([])

    useEffect(()=>{
        fetchDelivery() 
    },[])

    const fetchDelivery = async () => {
        await axios.get(`http://localhost:8000/api/deliverymaninfo/info`).then(({data})=>{
            setDelivery(data)
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
                                <th>ID</th>
                                <th>EMAIL</th>
                                <th>DOB</th>
                                <th>GENDER</th>
                                <th>USERNAME</th>
                                <th>PHONE</th>
                                <th>ADDRESS</th>
                                <th colspan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    deliveryman.length > 0 && (
                                        deliveryman.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.name}</td>
                                                <td>{row.id}</td>
                                                <td>{row.email}</td>
                                                <td>{row.dob}</td>
                                                <td>{row.gender}</td>
                                                <td>{row.username}</td>
                                                <td>{row.phone}</td>
                                                <td>{row.address}</td>
                                                <td>
                                                    <Link to={`/product/edit/${row.id}`} className='btn btn-success me-2'>
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