import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo DB Connected");
  } catch (error) {
    console.log("There was some error", error);
    process.exit(1);
  }
};

export default connectDB;
