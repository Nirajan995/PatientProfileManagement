import { verify } from "jsonwebtoken";
import User from "../models/user.model.js";
import { Formatter, Error } from "../services/response.formatter.js";

const auth = (req, res, next) => {
   if (req.method === 'GET' && !req.headers.authorization) {
      req.user = {
         _id: '',
      };
      next();
   } else if (!req.headers.authorization) {
      return res.status(401).json(Formatter.error(Error.AuthorizationError.message, null));
   } else {
      const token = req.headers.authorization.split(" ")[1];
      if (token) {
         verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
               return res.status(401).json(Formatter.error(err.message, null));
            }
            const user = await User.findById({ _id: decodedToken.id });
            req.user = user;
            next();
         });
      }
   }
};

export default auth;
