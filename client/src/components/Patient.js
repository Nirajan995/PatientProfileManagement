import React, { useEffect, useState } from 'react';
import PatientList from './PatientList';
import { Col, Row } from 'react-bootstrap';
import PatientService from '../services/patient.service.js';
import NavBar from './Navbar.js';
import ToastifyService from '../services/toastify.service.js';
import { useNavigate } from 'react-router-dom';


const Patient = () => {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    PatientService.getPatients()
      .then((response) => {
        if (response.data.status) {
          setPatients(response.data.data);
        }
      })
      .catch((err) => {
        navigate('/');
        ToastifyService.error(err.response.data.message);
      });
  }, []);

  const handleDeletePatient = (id) => {
    PatientService.deletePatient(id).then((response) => {
      if (response.data.status) {
        setPatients(patients.filter((patient) => patient['_id'] !== id));
      }
    }).catch((err) => {
      ToastifyService.error(err.response.data.error.message);
    })
  };

  const handleEditPatient = (id) => {
    navigate(`/patient/${id}`);
  };


  return (
    <>
      <NavBar />
      <Row>
        {patients.length > 0 ? (patients.map((patient) => (
          <Col key={patient._id} sm={12} md={6} lg={4} xl={3}>
            <PatientList patient={patient} handleDeletePatient={handleDeletePatient} handleEditPatient={handleEditPatient} />
          </Col>
        ))) : <h2 style={{ margin: "auto" }}>No records found for any patient. Please add a new patient.</h2>}
      </Row>

    </>
  )
}

export default Patient;