import express from 'express';
import cors from 'cors';
import path from 'path';

import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

//DB config
connectDB();

//EndPoints
app.use("/api/food",foodRouter)
const __dirname = path.resolve();
app.use("/images",express.static(path.join(__dirname, 'uploads')))


app.get("/",(req,res)=>{
    res.send("Server is Working")
})


//listen with callback function
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

//
