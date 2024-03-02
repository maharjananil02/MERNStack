import mongoose from "mongoose";

const userSchema = ({
    username:{
        type : String,
        required : [true, "Please provider username"]
    },
    email:{
        type : String,
        required : [true, "please provider email"],
        unique : [true, "Email address already taken"]
    },
    password:{
        type : String,
        required : [true, "Please provider password"]
    }
}) 

export default mongoose.model("User",userSchema);