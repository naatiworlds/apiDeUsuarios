import mongoose from "mongoose";

// Creamos el esquema de como va a ser la tabla de users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true

})

// Esto lo usamos para moder interactuar con la base de datos
export default mongoose.model("User", userSchema)