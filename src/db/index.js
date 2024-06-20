import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect
            (`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB CONNECTED !!!!!! DB HOST: 
            ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("ERROR (MongoDB connection error):", error);
        process.exit(1);
        //Node ka process
    }
}

export default connectDB;