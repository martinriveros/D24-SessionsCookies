let mongoose = require('mongoose')
let Schema = mongoose.Schema


const CONNECT = process.env.MONGO_DB_URI

let connection = null;

(async ()=>{
    try {
        console.log(`Conexion de mongo Atlas creada en ${CONNECT}`)
        connection = await mongoose.connect(`${CONNECT}`)
    } catch (error) {
        console.log('error al conectarse a Mongo Atlas')
        
    }
})()

const usersSchema = new Schema({

    username: {
            type: String,
            required:true
    },  
    email: {
            type: String,
            required: true,
            unique: true
    },
    password: {
            type:String,
            required: true
    }
      
})
const usersModel = mongoose.model(process.env.D_NAME_USERS, usersSchema)
module.exports =  usersModel 