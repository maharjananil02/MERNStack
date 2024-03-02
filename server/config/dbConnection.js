import mongoose from "mongoose";

const getConnecton = async(request,response) => {
    try {
        const connection = await mongoose.connect("mongodb://localhost:27017/node")
        console.log("Database connection::::",connection.connection.host)
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

export default getConnecton;





    