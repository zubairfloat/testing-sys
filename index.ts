import express from "express";
import { connection } from "./connection/connection";
import userRoutes from "./routes/userRoutes";

require('dotenv').config()
const app = express();
app.use(express.json());

const PORT = 3000;

connection.initialize().then(() => {
    console.log("connected database");

    //routes
    app.use("/api/users" , userRoutes)

    const server = app.listen(PORT , () => {
        console.log("server running on 3000");
    });
}).catch(err => {
    console.log("error during data base conection")
})





