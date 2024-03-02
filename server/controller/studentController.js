//import database from "../config/dbConnection.js"
import asyncHandler from "express-async-handler"
import Student from "../model/studentModel.js"

export const getAll = asyncHandler(async(request,response) =>{
    console.log("Get all students")
    try {
        const students = await Student.find();
        return response.status(200).json(students)
    } catch (error) {
        console.log(error)
        return response.status(500).json({"msg":error})
    }
});
    

export const getById = asyncHandler(async(request,response) => {
    
})

export const save = asyncHandler(async(request,response) => {
    const {name,address,email,faculty} = request.body;
    if(!name || !address || !email || !faculty){
        response.status(400);
        throw new Error("All fields are mandatory!")
    }
    try {
        const student = await Student.create({
            name,
            address,
            email,
            faculty
        })
        return response.status(201).json({msg:"Student created successfully",response:student})        
    } catch (error) {
        return response.status(500).json({"msg":error})        
    }
})


export const update = asyncHandler(async(request,response) => {
   const id = request.params.id;

   try {
    const student = await Student.findById(id);
    console.log(student)
    const updatedStudent = await Student.findByIdAndUpdate(
        id,
        request.body,
        {new : true}
    )
    return response.status(201).json({msg:"Student updated successfully",response:updatedStudent})        
} catch (error) {
    response.status(404);
    throw new Error("Student not found")
   }

});

export const remove = asyncHandler(async(request,response) => {
    const id = request.params.id;
    console.log(id);
    try {
     const student = await Student.findByIdAndDelete(id);
     return response.status(201).json({msg:"Student deleted successfully"})        
 } catch (error) {
    console.log(error)
     response.status(404);
     throw new Error("Student not found")
    }
})
export default {getAll, getById, save, remove, update}