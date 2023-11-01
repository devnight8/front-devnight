import mongoose from "mongoose";

async function connectDB() {
  try {
    if (mongoose.connections[0].readyState) return;
    // mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to database");
  } catch (err) {
    console.log("connect to database faild");
  }
}

export default connectDB;
