import database from "../database/datasource.js"

export async function getAll(request,response){
    try {
        const conn = await database.connect();
        const result = await conn.db("node").collection("student").find({}).toArray();
        return response.status(200).json({"data":result})
    } catch (error) {
        return response.status(500).json({"msg":error})
    }finally{
        await database.close();
    }
}



export async function getById(request,response){
    const id = request.params.id
    console.log("ID::",id)
    try {
        const conn = await database.connect();
        const result = await conn.db("node").collection("student").findOne({"_id":id});
        return response.status(200).json({"data":result})
    } catch (error) {
        return response.status(500).json({"msg":error})
    }finally{
        await database.close();
    }

}
export async function save(request,response){
    try {
        const conn = await database.connect();
        const result = await conn.db("node").collection("student").insertOne(request.body);
        return response.status(500).json({msg:"Student added successfully",response:result})        
    } catch (error) {
        return response.status(500).json({"msg":error})        
    }finally{
        await database.close();
    }
}

export async function update(request,response){
    try {
        const conn = await database.connect();
        const result = await conn.db("node").collection("student").updateOne({_id:request.params.id},{$set : request.body});
        return response.status(200).json({msg:"Student updated successfully",response:result})        
    } catch (error) {
        return response.status(500).json({"msg":error})        
    }finally{
        await database.close();
    }
}


export async function remove(request,response){
    const id = request.params.id
    try {
        const conn = await database.connect();
        const result = await conn.db("node").collection("student").deleteOne({"_id":id});
        return response.status(200).json({"data":result})
    } catch (error) {
        return response.status(500).json({"msg":error})
    }finally{
        await database.close();
    }

}
export default {getAll, getById, save, remove, update}