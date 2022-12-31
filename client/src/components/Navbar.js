import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
   const navigate = useNavigate();
   const logoutHandler = () => {
      sessionStorage.removeItem("auth");
      navigate("/");
   }
   return (
      <Navbar>
         <Container>
            <Navbar.Brand href="/patient/add">
               <button className='btn btn-primary'>Add Patient</button>
            </Navbar.Brand>
            <Navbar.Brand href="/patients">
               <button className='btn btn-secondary'>List Patients</button>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
               <Navbar.Text>
                  <button className='btn btn-danger' onClick={() => logoutHandler()}>Logout</button>
               </Navbar.Text>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default NavBar