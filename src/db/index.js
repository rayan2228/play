import mongoose from "mongoose";
import { DBName } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_CONNECTION_URI}/${DBName}`)
        console.log("MONGODB CONNECTED || DB HOST", connectionInstance.connection.host);
    } catch (error) {
        console.error("MONGODB CONNECTION FAILED", error);
    }
}

export default connectDB