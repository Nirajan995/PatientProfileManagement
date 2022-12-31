import React from 'react';

import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const PatientList = ({ patient, handleDeletePatient, handleEditPatient }) => {

   return (
      <>
         <Card className="my-3 p-3 rounded">
            {/* <Link to={`/patient/${patient._id}`}> */}
            <Card.Img src={patient.imageURL} variant="top" />
            {/* </Link> */}

            <Card.Body as="div">
               <Link to={`/patient/${patient._id}`}>
                  <Card.Title as="div">
                     <strong>{patient.fullName}</strong>
                  </Card.Title>
               </Link>
               <Card.Text as="h5">{patient.email}</Card.Text>
               <Card.Text as="h5">{patient.contact}</Card.Text>
               <Button variant="primary" onClick={() => handleEditPatient(patient._id)}>Edit</Button>{' '}
               <Button variant="danger" onClick={() => handleDeletePatient(patient._id)}>
                  Delete
               </Button>
            </Card.Body>
         </Card>
      </>
   )
}

export default PatientList