import { token_secret } from "../config.js";
import Jwt from "jsonwebtoken";

export function accessToken(payload) {
    return new Promise((resolve, reject) => {
        Jwt.sign(
            payload,
            token_secret,
            { 
                expiresIn: "1d" 
            },
            (err, token) => {
                if (err) reject(err)
                resolve(token)
            }
        );
    });
}