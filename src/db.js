import mongoose from "mongoose";

// Conexión con la base de datos
export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/loginconmongo");
        console.log("Db is connected :D");
    } catch (error) {
        console.error(error);
    }
}; 