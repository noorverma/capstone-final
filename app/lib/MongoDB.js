import mongoose from "mongoose";

// This function connects to the MongoDB database using Mongoose.
export const connectMongoDB = async () => {
    
    try {
        // Attempt to establish a connection to MongoDB using the URI from environment variables.
        await mongoose.connect(process.env.MongolDB_URI);
        console.log("Connected to MONGODB"); // Log success message if the connection is established.

    } catch (error) {
        // If an error occurs during connection, log the error message.
        console.log("ERROR connecting to database:", error);
    }
}
