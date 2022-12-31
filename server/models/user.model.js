import { Schema, model } from "mongoose";
import pkg from "validator";
import { genSalt, hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { EMAIL_REQUIRED_VALIDATOR, IS_EMAIL_VALIDATOR, PASSWORD_REQUIRED_VALIDATOR, PASSWORD_MINLENGTH_VALIDATOR, PASSWORD_REGEX_VALIDATION, PASSWORD_REGEX_VALIDATOR, EMAIL_PASSWORD_VALIDATOR } from "../constants/validators.constants.js";

const { sign } = jwt;
const { isEmail } = pkg;

Schema.Types.String.checkRequired((v) => typeof v === 'string');

const userSchema = Schema(
   {
      email: {
         type: String,
         required: [true, EMAIL_REQUIRED_VALIDATOR],
         lowercase: true,
         unique: true,
         validate: [isEmail, IS_EMAIL_VALIDATOR],
      },
      password: {
         type: String,
         required: [true, PASSWORD_REQUIRED_VALIDATOR],
         minlength: [8, PASSWORD_MINLENGTH_VALIDATOR],
         match: [PASSWORD_REGEX_VALIDATION, PASSWORD_REGEX_VALIDATOR],
      },
      jwt: {
         type: String,
      },
   },
   { timestamps: true },
);

userSchema.pre("save", async function (next) {
   const salt = await genSalt();
   this.password = await hash(this.password, salt);
   next();
});

userSchema.post("save", async function (doc, next) {
   const user = this;
   user.jwt = User.generateJWTtoken(user._id);
   await User.findOneAndUpdate({ _id: user._id }, { jwt: user.jwt });
});

userSchema.statics.login = async function (email, password) {
   const user = await this.findOne({ email });
   // console.log(user);
   if (user) {
      const auth = await compare(password, user.password);
      if (auth) {
         user.jwt = User.generateJWTtoken(user._id);
         return user;
      }
      throw Error(EMAIL_PASSWORD_VALIDATOR);
   }
   throw Error(EMAIL_PASSWORD_VALIDATOR);
};

userSchema.statics.generateJWTtoken = function (id) {
   const jwt = sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY_TIME,
   });
   return jwt;
};

const User = model("User", userSchema);

export default User;
