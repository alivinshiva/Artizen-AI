import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null }
}

export const connectToDatabase = async () => {
    if (cached.conn) {
        console.log("Using cached database connection");
        return cached.conn;
    }

    if (!MONGODB_URL) {
        throw new Error('MONGODB_URL is not set in the environment variables');
    }

    try {
        cached.promise = cached.promise || mongoose.connect(MONGODB_URL, { dbName: 'artizenai', bufferCommands: false });
        cached.conn = await cached.promise;
        console.log("Database connected successfully");
        return cached.conn;
    } catch (error) {
        console.error("Database connection failed", error);
        throw new Error("Database connection failed");
    }
}
