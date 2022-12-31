import axios from "axios";
import authHeader from "./auth-header.js";

const Patient_Api_Base_URL = "http://localhost:3000/api/v1";

class PatientService {
   getPatients() {
      return axios.get(Patient_Api_Base_URL + '/patient', { headers: authHeader() });
   }

   deletePatient(id) {
      return axios.delete(Patient_Api_Base_URL + `/patient/${id}`, { headers: authHeader() });
   }
}

export default new PatientService();