import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { accessToken } from '../libs/jwt.js';

export const register = async (req, res) => {
    /** 
     * Función asincrona para el registro de un nuevo usuario dentro de la base de datos de datos de mongodb de la tabla User.
     * 
     * Luego se genera un token con la información del usuario.
     * 
     * Y po último se envia la información al frontend 
     * **/
    // Constantes de la request body.
    const { username, password, email } = req.body;

    try {
        // La contraseña hasheada.
        const passwordHash = await bcrypt.hash(password, 10)
        // creación de un nuevo usuario.
        const newUser = new User({
            username,
            password: passwordHash,
            email
        })
        // Guardamos el usuario guardado para acceder a él
        const userSaved = await newUser.save()
        // Creamos el token
        const token = await accessToken({id: userSaved._id})
        // Lo almacenamso en una cookie
        res.cookie("token", token);
        // Enviamos los datos del usuario.
        res.send({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        });
    } catch (error) {
        console.error(error)
    }

};
export const login = (req, res) => { res.send("login") };