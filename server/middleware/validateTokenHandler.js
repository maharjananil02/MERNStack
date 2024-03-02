import asyncHandler from "express-async-handler"
import jwt from "jsonwebtoken"

const validateToken = asyncHandler(async(request,response,next) => {
    console.log("HERE")
    let token;
    let authHeader = request.headers.Authorization || request.headers.authorization;

    console.log(authHeader)

    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1]
        jwt.verify(token,"ANIL MAHARJAN",(error,decode) => {
            if(error){
                response.status(401);
                throw new Error("User is not authorized");
            }
            console.log(decode)
            request.user = decode.user;
            next();
        })
        if(!token){
            response.status(401);
            throw new Error("User is not authorized or token is missing")
        }
    }else{
        response.status(404);    
        throw new Error("Token is not valid")

    }
})

export default validateToken;