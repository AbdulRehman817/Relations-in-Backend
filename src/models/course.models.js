import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    coursename: {
      type: String,
      required: "true",
    },
    duration: {
      type: Number,
      required: "true",
    },
    enrolledStudents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Course", courseSchema);
