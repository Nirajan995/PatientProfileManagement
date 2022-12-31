import User from "../models/user.model.js";
import { Formatter, AuthenticationError, AuthenticationSuccess } from "../services/response.formatter.js";
import { UNIQUE_EMAIL_VALIDATOR, EMAIL_PASSWORD_VALIDATOR, USER_VALIDATION_FAILED } from "../constants/validators.constants.js";

export const signupUser = async (req, res) => {
   const { email, password } = req.body;
   try {
      const user = await User.create({ email, password });
      return res
         .status(201)
         .json(
            Formatter.success(
               AuthenticationSuccess.SignUpSuccess.message,
               { userId: user._id },
            ),
         );
   } catch (error) {
      console.log(error)
      const errors = handleErrors(error);
      res
         .status(401)
         .json(Formatter.error(errors.message, errors));
   }
};

export const loginUser = async (req, res) => {
   const { email, password } = req.body;
   try {
      if (!email || !password) {
         return res
            .status(404)
            .json(
               Formatter.error(
                  AuthenticationError.EmailPasswordRequired.message,
                  null,
               ),
            );
      }
      const user = await User.login(email, password);
      if (user) {
         return res
            .status(200)
            .json(
               Formatter.success(
                  AuthenticationSuccess.AuthenticationSuccess.message,
                  { userId: user._id, jwt: user.jwt },
               ),
            );
      }
      res
         .status(400)
         .json(
            Formatter.error(
               AuthenticationError.AuthenticationErr.message,
               null,
            ),
         );
   } catch (error) {
      console.log(error);
      const errors = handleErrors(error);
      res
         .status(400)
         .json(
            Formatter.error(
               errors.message,
               errors,
            ),
         );
   }
};

const handleErrors = (err) => {
   // duplicate email error
   // code 11000 refers to unique validation error
   // where mongo does not send proper validation error message
   let message = "";
   if (err.code === 11000) {
      message = UNIQUE_EMAIL_VALIDATOR;
      return { ...err, message };
   }

   if (err.message === EMAIL_PASSWORD_VALIDATOR) {
      message = err.message;
      return { ...err, message };
   }
   if (err.message.includes(USER_VALIDATION_FAILED)) {
      // validation errors
      Object.values(err.errors).forEach(({ properties }) => {
         message = properties.message;
      });
      return { ...err, message };
   }
};
