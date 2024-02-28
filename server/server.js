import express from "express"
import studentRoute from "./route/studentRoute.js"
import cors from "cors";

const app = express();

//pass the request body from server express.json is used
app.use(express.json())
app.use(cors())
app.use("/student",studentRoute);

app.get("*",function(request,response){
    response.send("Bad Request")
})

app.listen("5000",function(error){
    if(error) console.log("Error while starting server :::",error)
    else console.log("Starting server at port::::",5000)
})
