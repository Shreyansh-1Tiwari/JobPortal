import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectdb from "./utils/db.js";
import userRoute from "./routes/userRoute.js";
import companyRoute from "./routes/companyRoute.js"
import jobRoute from "./routes/jobRoute.js"
import applicationRoute from "./routes/applicationRoute.js"
import path from "path"

dotenv.config({})

const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

const app = express();
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin: process.env.URL,
    credentials:true
}
app.use(cors(corsOptions));

app.get("/home" , (req , res) => {
    return res.status(200).json({
        message: "I am coming from backend",
        success: true,
    })
})

//api's
app.use("/api/v1/user" , userRoute);
app.use("/api/v1/company" , companyRoute);
app.use("/api/v1/job" , jobRoute);
app.use("/api/v1/application" , applicationRoute);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*" , (req,res)=>{
    res.sendFile(path.resolve(__dirname , "frontend" , "dist" , "index.html"))
})

app.listen(PORT , () => {
    connectdb();
    console.log(`Server running successfully at ${PORT}`);
})
