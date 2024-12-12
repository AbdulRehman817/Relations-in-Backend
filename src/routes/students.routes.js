import express from "express";
import {
  createStudent,
  getUsers,
} from "../controllers/students.controllers.js";

const router = express.Router();

// Create a new student
router.post("/students", createStudent);
router.post("/students", getUsers);

export default router;
