import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true, // Removes leading/trailing whitespace
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures email uniqueness
    },
    enrolledCourse: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course", // Reference to Course model
    },
  },
  {
    timestamps: true, // Automatically creates `createdAt` and `updatedAt`
  }
);

export default mongoose.model("Student", studentSchema);
