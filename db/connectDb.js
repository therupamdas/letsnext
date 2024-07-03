import mongoose from "mongoose";
import User from "@/models/User";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {});
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);

  }
}

connectDB();
export const users = await  User.find();
export default connectDB;

