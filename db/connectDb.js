import mongoose from "mongoose";
import User from "@/models/User";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://rupamdas77:72gPQEixYPCV37qj@rupamdas.ndbssvp.mongodb.net/vring77`, {
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);

  }
}

connectDB();
export const users = await  User.find();
export default connectDB;

