import express from "express";
import { getAll,getById,save,remove,update } from "../controller/studentController.js";

const student = express.Router();

student.get("/",getAll);
student.get("/:id", getById);
student.post("/save",save)
student.delete("/delete/:id", remove);
student.put("/update/:id", update);

export default student;