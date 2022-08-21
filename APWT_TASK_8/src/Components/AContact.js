import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TopAdmin from "./TopAdmin";

const AContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gbxb4lb', 'template_kesunl7', form.current, '6wA1bAPLHnD37wCW0')
      .then((result) => {
          console.log(result.text);
          e.Target.reset();
      }, (error) => {
          console.log(error.text);
      });
      
  };

  return (
    <div>
    <TopAdmin></TopAdmin>
    <div className='container'>
    <form ref={form} onSubmit={sendEmail}>
        {/* <div className='row pt-5 mx-auto'>
            <div className='col-8 form-group mx-auto'>
                <input type='text' className="form-control" placeholder='Name' name='name'/>
            </div>
            <div className='col-8 form-group pt-2 mx-auto'>
                <input type='email' className="form-control" placeholder='Email Address' name='email'/>
            </div>
            <div className='col-8 form-group pt-2 mx-auto'>
                <input type='text' className="form-control" placeholder='Comment' name='comment'/>
            </div> */}
        <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Comment</label>
      <input type="text" name="comment" />
      <div className='col-8 pt-3 mx-auto'><input type="submit" className='btn btn-info' value="Send" /></div>
      
        {/* </div> */}
     
    </form>
    </div>
    
    </div>
  );
};
export default AContact;