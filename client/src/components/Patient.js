import React, { useEffect, useState } from 'react';
import PatientList from './PatientList';
import { Col, Row } from 'react-bootstrap';
import PatientService from '../services/patient.service.js';

const Patient = ({ patient }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    PatientService.getPatients()
      .then(({ data }) => {
        setPatients(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeletePatient = (id) => {
    PatientService.deletePatient(id).then((response) => {
      if (response.data.status) {
        setPatients(patients.filter((patient) => patient['_id'] !== id));
      }
    }).catch((err) => {
      console.log(err);
    })
  };

  return (
    <>
      <Row>
        {patients.map((patient) => (
          <Col key={patient._id} sm={12} md={6} lg={4} xl={3}>
            <PatientList patient={patient} handleDeletePatient={handleDeletePatient} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Patient;