const errorHandler = (error,request,response,next) => {
    const statusCode = response.statusCode
    response.json({message:error.message,status:statusCode})
}