
import './App.css';
import Login from './pages/Login';

import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Patient from './components/Patient';
import { ToastContainer } from 'react-toastify';
import AddPatient from './components/AddPatient';
import EditPatient from './components/EditPatient';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/patients" exact element={<Patient />} />
        <Route path="/patient/:id" exact element={<EditPatient />} />
        <Route path="/patient/add" exact element={<AddPatient />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
