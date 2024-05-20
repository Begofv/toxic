import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongo.js";

dotenv.config();
const CONTAINER_PORT = 3000;

const app = express();

app.get("/", (req, res) => {
    res.send({message:"Hello World!"});
});

app.listen(CONTAINER_PORT,()=>{
    console.log("Aplicacion en marcha en el puerto "+process.env.APP_PORT);
})