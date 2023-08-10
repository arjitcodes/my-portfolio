import mongoose from "mongoose";

export default async function dbConn(){
    try {
      await mongoose.connect(process.env.DB_URI)
       const connection=mongoose.connection
       connection.on("connected",()=>{
        console.log("Successfuly connect with db")
       })
       connection.on("error",(error)=>{
        console.log('Failed to coonect with db '+error.message)
       })
    
    } catch (error) {
        console.log('Failed to coonect with db '+error.message)
    }
}