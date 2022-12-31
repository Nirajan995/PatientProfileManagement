export default function authHeader() {
   const jwtToken = sessionStorage.getItem("auth");
   if (jwtToken) {
      return { Authorization: "Bearer " + jwtToken };
   } else {
      return {};
   }
}