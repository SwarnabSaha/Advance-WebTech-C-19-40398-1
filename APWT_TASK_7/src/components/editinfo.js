import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function EditUser() {
  const navigate = useNavigate();

  const { id } = useParams()

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState(null)
  const [validationError,setValidationError] = useState({})

//   const handleInput = (e) => {
//     e.persist();
//     setCustomer({...customerInput,[e.target.name]:e.target.value});


//   }

  useEffect(()=>{
    fetchCustomer();
    // const customer_id = props.match.params.id
    // axios.get(`/api/edit-customer/$(customer_id)`).then(res=>{ 
    //     if(res.data.status === 200)
    //     {
    //         // console.log(res.data.customer);
    //         setCustomer(res.data.customer);

    //     }

 
    // });
  },[])

  const fetchCustomer = async (id) => {
    await axios.get(`http://localhost:8000/api/customer/${id}`).then(({data})=>{
      const { name, phone, email } = data.customer
      setName(name)
      setPhone(phone)
      setEmail(email)
    }).catch(({response:{data}})=>{
      Swal.fire({
        text:data.message,
        icon:"error"
      })
    })
  }

  const changeHandler = (event) => {
		
	};

  const updateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('_method', 'PATCH');
    formData.append('name', name)
    formData.append('phone', phone)
    formData.append('email', email)

    await axios.post(`http://localhost:8000/api/customer/${id}`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/")
    }).catch(({response})=>{
      if(response.status===422){
        setValidationError(response.data.errors)
      }else{
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      }
    })
  }
  const CustomerDetails = () => {
    const [customer, setCustomer] = useState([]);
    let { id } = useParams();
    let url = "http://127.0.0.1:8000/api/customer/"+id;
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Update Product</h4>
              <hr />
              <div className="form-wrapper">
                {
                  Object.keys(validationError).length > 0 && (
                    <div className="row">
                      <div className="col-12">
                        <div className="alert alert-danger">
                          <ul className="mb-0">
                            {
                              Object.entries(validationError).map(([key, value])=>(
                                <li key={key}>{value}</li>   
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                }
                <Form onSubmit={updateProduct}>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={customer.name} onChange={(event)=>{
                              setName(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row className="my-3">
                      <Col>
                        <Form.Group controlId="Phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" rows={3} value={customer.phone} onChange={(event)=>{
                              setPhone(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>
                  </Row>
                  <Row className="my-3">
                      <Col>
                        <Form.Group controlId="Email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" rows={3} value={customer.email} onChange={(event)=>{
                              setEmail(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>
                  </Row>
                  <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                    Update
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

}

















