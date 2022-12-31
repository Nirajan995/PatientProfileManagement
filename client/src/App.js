
import './App.css';
import Login from './pages/Login';

import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Patient from './components/Patient';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/patients" exact element={<Patient />} />
      </Routes>
    </>
  );
}

export default App;
