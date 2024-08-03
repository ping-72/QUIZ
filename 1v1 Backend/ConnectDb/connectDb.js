import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config({ path: ".env"});
// require("dotenv").config({ path: ".env" });

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("couldn't Connect to database \n", error);
    process.exit(1);
  }
};

export default connectDb;
