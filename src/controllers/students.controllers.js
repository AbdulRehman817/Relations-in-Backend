import mongoose from "mongoose";
import studentsModels from "../models/students.models.js";
import courseModels from "../models/course.models.js";

const createStudent = async (req, res) => {
  const { fullname, email, enrolledCourse } = req.body;
  if (!fullname) {
    return res.status(401).json({
      message: "fullname is required",
    });
  }
  if (!email) {
    return res.status(401).json({
      message: "fullname is required",
    });
  }
  const student = await studentsModels.create({
    fullname,
    email,
    enrolledCourse,
  });
  res.status(200).json({
    message: "student added",
    student,
  });
  const course = await courseModels.findByIdAndUpdate(enrolledCourse, {
    $push: { enrolledStudents: student._id },
  });
};
const getUsers = async (req, res) => {
  const students = await studentsModels.find({});
  res.json(students);
};

export { createStudent, getUsers };
