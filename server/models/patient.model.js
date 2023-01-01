import { Schema, model } from "mongoose";
import pkg from "validator";
import { FULLNAME_REQUIRED_VALIDATOR, FULLNAME_MINLENGTH_VALIDATOR, EMAIL_REQUIRED_VALIDATOR, IS_EMAIL_VALIDATOR } from "../constants/validators.constants.js";

const { isEmail } = pkg;

const patientSchema = Schema(
   {
      fullName: {
         type: String,
         required: [true, FULLNAME_REQUIRED_VALIDATOR],
         minlength: [6, FULLNAME_MINLENGTH_VALIDATOR],
      },
      email: {
         type: String,
         required: [true, EMAIL_REQUIRED_VALIDATOR],
         lowercase: true,
         unique: true,
         validate: [isEmail, IS_EMAIL_VALIDATOR],
      },
      contact: {
         type: String,
         required: true
      },
      imageURL: {
         type: String
      },
      address: {
         type: String
      },
      specialAttention: {
         type: Boolean,
         default: false
      }
   },
   { timestamps: true },
);


const Patient = model("Patient", patientSchema);

export default Patient;
