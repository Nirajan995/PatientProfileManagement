import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import AuthService from '../services/auth.service';
import ToastifyService from '../services/toastify.service';
import { ToastContainer } from 'react-toastify';

const Register = () => {
   const [email, setEmail] = useState("");

   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      AuthService.signUp(email, password).then((response) => {
         if (response.data.status) {
            navigate("/");
         }
      }).catch((err) => {
         ToastifyService.error(err.response.data.error.message);
      })
   }
   return (
      <>
         <MDBContainer fluid className="p-3 my-5 h-custom">

            <MDBRow>

               <MDBCol col='10' md='6'>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
               </MDBCol>

               <MDBCol col='4' md='6'>

                  <div className="d-flex flex-row align-items-center justify-content-center">

                     <p className="lead fw-normal mb-0 me-3">Sign In</p>

                  </div>

                  <div className="divider d-flex align-items-center my-4">
                     <p className="text-center fw-bold mx-3 mb-0">Patient Management System</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                     <MDBInput autoFocus wrapperClass='mb-4' label='Email address' id='email' type='email' size="lg" onChange={(e) => setEmail(e.target.value)} />
                     <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} />

                     <div className='text-center text-md-start mt-4 pt-2'>
                        <MDBBtn className="mb-0 px-5" size='lg' type='submit'>Login</MDBBtn>
                        <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <a href="/" className="link-danger">Login</a></p>
                     </div>
                  </form>

               </MDBCol>

            </MDBRow>


         </MDBContainer>
         <ToastContainer />
      </>
   )
}

export default Register