import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        console.log("URI:", process.env.MONGODB_URI);

        const connection = await mongoose.connect(process.env.MONGODB_URI);

        console.log("✅ Connected");
        console.log(connection.connection.host);

    } catch (error) {
        console.log(error);
    }
};

export default connectDB