import  { MongoClient } from "mongodb"

// Create Instance of MongoClient for mongodb
const client = new MongoClient('mongodb://localhost:27017')

// Connect to database
//start mongodb server
//sudo mongod --dbpath=/Users/anilmaharjan/data/db
// client.connect()
//     .then(() => console.log('Connected Successfully'))
//     .catch(error => console.log('Failed to connect', error))


export default client;





    