import app from "./app.js"
import { connectDB } from "./db.js"


connectDB();
// Arraque del servidor:
app.listen(3000)
console.log("Server listening on: ", 3000)