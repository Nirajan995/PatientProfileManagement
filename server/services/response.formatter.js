export class Formatter {
   static success(message, data) {
      return {
         status: "true",
         message,
         data,
      };
   }

   static error(message, error) {
      return {
         status: "false",
         message,
         error,
      };
   }
}

export const AuthenticationError = {
   AuthenticationErr: {
      name: "AuthenticationError",
      message: "Failed to authenticate",
   },
   SignUpFailure: {
      name: "SignUpFailure",
      message: "Not authorized to sign up",
   },
   EmailPasswordRequired: {
      name: "EmailPasswordRequired",
      message: "Email or password is required to authenticate",
   },
   SignUpError: {
      name: "SignUpError",
      message: "Failed to sign up the user",
   },
};

export const AuthenticationSuccess = {
   AuthenticationSuccess: {
      name: "AuthenticationSuccess",
      message: "Authenticated Successfully",
   },
   SignUpSuccess: {
      name: "SignUpSuccess",
      message: "Successfully signed up the user",
   },
};

export const Error = {
   PatientDeleteError: {
      name: "PatientDeleteError",
      message: "Failed to delete patient.",
   },
   AuthorizationError: {
      name: "AuthorizationError",
      message: "Auth Failed (Unauthorized)!!",
   },
   JWTExpirationError: {
      name: "TokenExpiredError",
      message: "Token expired !! Please login again to continue.",
   },
   AddPatientFailure: {
      name: "AddPatientFailure",
      message: "Failed to add patient.",
   },
   ProductUpdateError: {
      name: "ProductUpdateError",
      message: "Failed to update patient.",
   },
   PatientFetchByIdError: {
      name: "PatientFetchByIdError",
      message: "Failed to fetch patient.",
   },
   PatientNotFound: {
      name: "PatientNotFound",
      message: "No patient found with similar id.",
   },
};

export const Success = {
   PatientDeleteSuccess: {
      name: "PatientDeleteSuccess",
      message: "Successfully Deleted patient.",
   },
   UpdatePatientSuccess: {
      name: "UpdatePatientSuccess",
      message: "Updated Successfully!!",
   },
   AddPatientSuccess: {
      name: "AddPatientSuccess",
      message: "Patient added successfully.",
   },
   PatientFetchByIdSuccess: {
      name: "PatientFetchByIdSuccess",
      message: "Fetched patient by id successfully.",
   },
   PatientFetchSuccess: {
      name: "PatientFetchSuccess",
      message: "Fetched patient successfully.",
   },
};

