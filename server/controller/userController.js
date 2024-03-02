import asyncHandler from "express-async-handler"
import bcrypt from "bcrypt"
import User from "../model/userModel.js"
import jwt from "jsonwebtoken"

export const registerUser = asyncHandler(async(request,response) => {
    const {username, email, password} = request.body;
    if(!username || !email || !password){
        response.status(400);
        throw new Error("All Fields are mandatory");
    }
    const availableUser = await User.findOne({email});
    if(availableUser){
        throw new Error("User already exists")
    }
    const hashedPassword = await bcrypt.hash(password,10);
    console.log(hashedPassword)
    const user = await User.create({
        username,
        email,
        password : hashedPassword
    });
    console.log('User created successfully ',user)
    if(user){
        response.status(200).json({message:"User create successfully", userId : user.id ,email : user.email})
    }else{
        response.status(500).json({message:"Unable to register a user", userId : user.id ,email : user.email})
    }
})


export const loginUser = asyncHandler(async(request,response) => {
    const {email,password} = request.body;
    if(!email || !password){
        response.status(400)
        throw new Error("All fields are mandatory");
    }
    const user = await User.findOne({email});
    //compare password
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign({
            user:{
                username : user.username,
                email : user.email,
                id : user.id
            }
        }, "ANIL MAHARJAN",{expiresIn : "60m"})
        response.status(200).json({"JWT token" : accessToken})
    }else{
        response.status(400);
        throw new Error("Email or password is not valid")
    }
})

export const currentUser = asyncHandler(async(request,response) =>{
    response.status(200).json(request.user)
})

export default {registerUser,loginUser,currentUser}