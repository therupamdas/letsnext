import mongoose from "mongoose";
import User from "@/models/User";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://rupamdas77:72gPQEixYPCV37qj@rupamdas.ndbssvp.mongodb.net/vring77`, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("problemmmmmmm");
    console.error(error.message);
    process.exit(1);
  }
}
export const users = async () => {
  await connectToDatabase();
  return await User.find();
};
console.log(users);

export default connectDB;

