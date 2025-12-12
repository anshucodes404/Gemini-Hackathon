import mongoose from "mongoose";

type connectionObject = {
    isConnected?: number;
}

const connection: connectionObject = {}

export default async function dbConnect(){

    if(connection.isConnected){
        console.log("Connection already exist");
        return;
    }

    const MONGODB_URI = process.env.MONGODB_URI;

    if(!MONGODB_URI){
        throw new Error("MONGODB_URI is not defined");
    }

    try {
        const connectionInstance = await mongoose.connect(MONGODB_URI);
        connection.isConnected = connectionInstance.connections?.[0].readyState;
        console.log("Connection successful")
    } catch (error) {
        console.error(error)
        throw new Error("Failed to connect to DB");
    }
}

