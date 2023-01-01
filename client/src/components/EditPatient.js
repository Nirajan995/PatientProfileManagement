import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavBar from './Navbar';

import { useNavigate } from 'react-router-dom';
import patientService from '../services/patient.service';
import toastifyService from '../services/toastify.service';

const EditPatient = () => {

   // useEffect(() => {
   //    patientService.getPatientById(id)
   //       .then(({ data }) => {
   //       })
   //       .catch((err) => {
   //       });
   // }, []);

   const [image, setImage] = useState();
   const [fullName, setFullName] = useState();
   const [email, setEmail] = useState();
   const [contact, setContact] = useState();
   const [address, setAddress] = useState();
   const fileInputRef = useRef();

   const navigate = useNavigate();


   const updateHandler = async (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append("image", image);
      data.append("fullName", fullName);
      data.append("email", email);
      data.append("contact", contact);
      data.append("address", address);

      patientService.updatePatient(data).then((response) => {
         if (response.data.status) {
            navigate('/patients');
         }
      }).catch((err) => {
         toastifyService.error(err.response.data.message);
      })

   }
   return (
      <>
         <NavBar />
         <h3>Edit Patient</h3>
         <Form style={{ margin: '4rem' }} onSubmit={updateHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Full Name</Form.Label>
               <Form.Control type="text" placeholder="Enter full name" onChange={(e) => {
                  setFullName(e.target.value);
               }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" onChange={(e) => {
                  setEmail(e.target.value);
               }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContac">
               <Form.Label>Contact</Form.Label>
               <Form.Control type="number" placeholder="Contact Number" onChange={(e) => {
                  setContact(e.target.value);
               }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
               <Form.Label>Address</Form.Label>
               <Form.Control type="text" placeholder="Address" onChange={(e) => {
                  setAddress(e.target.value);
               }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContac">
               <Form.Label>Image</Form.Label>
               <Form.Control
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={(e) => {
                     const file = e.target.files[0];
                     if (file && file.type.substr(0, 5) === "image") {
                        setImage(file);
                     } else {
                        setImage(null);
                     }
                  }} />
            </Form.Group>
            <Button variant="primary" type="submit">
               Submit
            </Button>
         </Form>
      </>
   );
}

export default EditPatient;