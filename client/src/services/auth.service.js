import axios from "axios";

const Auth_Api_Base_URL = "http://localhost:3000/api/v1";

class AuthenticationService {
   signUp(email, password) {
      return axios.post(Auth_Api_Base_URL + '/signup', { email, password }, {
         "Content-Type": "application/json",
      })
   }

   login(email, password) {
      return axios.post(Auth_Api_Base_URL + '/signin', { email, password }, {
         "Content-Type": "application/json",
      })
   }
}

export default new AuthenticationService();