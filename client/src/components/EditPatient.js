import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavBar from './Navbar';

import { useNavigate, useParams } from 'react-router-dom';
import patientService from '../services/patient.service';
import toastifyService from '../services/toastify.service';

const EditPatient = () => {
   const [image, setImage] = useState();
   const [fullName, setFullName] = useState();
   const [email, setEmail] = useState();
   const [contact, setContact] = useState();
   const [address, setAddress] = useState();

   const [specialAttention, setSpecialAttention] = useState();
   const fileInputRef = useRef();

   const navigate = useNavigate();

   const { id } = useParams();

   useEffect(() => {
      patientService.getPatientById(id)
         .then(({ data }) => {
            if (data.status) {
               console.log(data)
               setFullName(data.data.fullName);
               setAddress(data.data.address);
               setContact(data.data.contact);
               setEmail(data.data.email);
               setSpecialAttention(data.data.specialAttention);
               console.log(email)
               console.log(contact)
            }
         })
         .catch((err) => {
         });
   }, [id]);


   const updateHandler = async (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append("image", image);
      data.append("fullName", fullName);
      data.append("email", email);
      data.append("contact", contact);
      data.append("address", address);
      data.append("specialAttention", specialAttention);

      patientService.updatePatient(data, id).then((response) => {
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
               <Form.Control type="text" placeholder="Enter full name" value={fullName || ''} onChange={(e) => {
                  setFullName(e.target.value);
               }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" value={email || ''} onChange={(e) => {
                  setEmail(e.target.value);
               }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContac">
               <Form.Label>Contact</Form.Label>
               <Form.Control type="number" placeholder="Contact Number" value={contact || ''} onChange={(e) => {
                  setContact(e.target.value);
               }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
               <Form.Label>Address</Form.Label>
               <Form.Control type="text" placeholder="Address" value={address || ''} onChange={(e) => {
                  setAddress(e.target.value);
               }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Requires Special Attention?" defaultChecked={specialAttention} onChange={(e) => {
                  e.target.value === 'on' ? setSpecialAttention(true) : setSpecialAttention(false);
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