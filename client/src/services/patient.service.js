import axios from "axios";
import authHeader from "./auth-header.js";

const Patient_Api_Base_URL = "http://localhost:3000/api/v1";

class PatientService {
   getPatients() {
      return axios.get(Patient_Api_Base_URL + '/patient', { headers: authHeader() });
   }

   getPatientById(id) {
      return axios.get(Patient_Api_Base_URL + `/patient/${id}`, { headers: authHeader() });
   }

   deletePatient(id) {
      return axios.delete(Patient_Api_Base_URL + `/patient/${id}`, { headers: authHeader() });
   }

   addPatient(data) {
      return axios.post(Patient_Api_Base_URL + `/patient`, data,
         { headers: authHeader(), "Content-Type": "multipart/form-data" });
   }

   updatePatient(data, id) {
      return axios.put(Patient_Api_Base_URL + `/patient/${id}`, data,
         { headers: authHeader(), "Content-Type": "multipart/form-data" });
   }
}

export default new PatientService();