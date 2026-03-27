import detenv from "dotenv";
detenv.config();
import mongoose from "mongoose";
const url =process.env.URL
const dbConneect = async () => {
  try {
    await mongoose.connect(url)
    console.log("database connect suuccessfully");
  } catch (error) {
    console.error(error);
  }
};
export default dbConneect;