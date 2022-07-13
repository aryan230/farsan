import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/User.js";
import courses from "./data/Courses.js";
import User from "./models/userModel.js";
import Course from "./models/courseModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Course.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleCourses = courses.map((course) => {
      return { ...course, user: adminUser };
    });

    await Course.insertMany(sampleCourses);
    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Course.deleteMany();
    await User.deleteMany();

    console.log("Data Deleted");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
