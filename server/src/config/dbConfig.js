import mongoose from "mongoose";
import DB_NAME from "../contants.js";

export const dbConfig = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    console.log(`DB connect successfully ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};
