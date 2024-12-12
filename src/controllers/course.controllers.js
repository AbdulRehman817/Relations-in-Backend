import mongoose from "mongoose";

import courseModels from "../models/course.models.js";

const addCourse = async (req, res) => {
  const { coursename, duration } = req.body;
  if (!coursename) {
    return res.status(401).json({
      message: "coursename is required",
    });
  }
  if (!duration) {
    return res.status(401).json({
      message: "duration is required",
    });
  }
  const course = await courseModels.create({
    duration,
    coursename,
  });
  res.status(200).json({
    message: "course added",
    course,
  });
};

const getCourse = async (req, res) => {
  const course = await courseModels.find({}).populate("enrolledStudents");
  res.json(course);
};

export { getCourse, addCourse };
