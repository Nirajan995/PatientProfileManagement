import { connect, set } from "mongoose";

import { config } from "dotenv";

config();

const connDB = async () => {
   try {
      set("strictQuery", true);

      const conn = await connect(process.env.MONGO_URI, {
         useUnifiedTopology: true,
         useNewUrlParser: true,
      });

      console.log(`MongoDB Connected: ${conn.connection.host}`);
   } catch (error) {
      console.log(`Error: ${error.message}`);
      process.exit(1);
   }
};

export default connDB;
