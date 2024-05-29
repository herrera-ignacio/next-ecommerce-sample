import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState < 1) {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
  }
};

export default dbConnect;
