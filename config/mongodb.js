import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/imagify`);
    console.log("✅ Database Connected");
  } catch (error) {
    console.error("❌ DB connection error:", error.message);
  }
};


export default connectDB;