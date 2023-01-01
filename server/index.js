import express, { json, urlencoded } from "express";
import cors from "cors";

import { config } from "dotenv";
import indexRouter from "./routes/index.js";
import connDB from "./config/db.js";

export const app = express();

config();

connDB();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/api/v1", indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log(
      `Server is running at PORT ${PORT} in ${process.env.NODE_ENV} environment`
   );
});

app.use((req, res, next) => {
   const error = new Error("URL not found");
   error.status = 404;
   next(error);
});

// Sets a generic server error status code if none is part of the err
app.use((err, req, res, next) => {
   const error = err;
   if (!err.statusCode) error.statusCode = 500;
   res.status(err.status || 500);
   res.json({
      err: {
         message: err.message,
      },
   });
});

export default app;
