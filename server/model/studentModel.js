import mongoose from "mongoose"

const studentSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Plase enter student name"]
    },
    address : {
        type : String,
        required : [true, "Plase enter student address"]
    },
    email : {
        type : String,
        required : [true, "Plase enter student email"]
    },
    faculty : {
        type : String,
        required : [true, "Plase enter student faculty"]
    },
})

export default mongoose.model("Student",studentSchema)