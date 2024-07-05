import mongoose from "mongoose";
import User from "@/models/User";
import Reqpost from "@/models/Reqpost";


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {});
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}


connectDB();
export const reqs = await  Reqpost.find();
export const users = await  User.find();
export default connectDB;

