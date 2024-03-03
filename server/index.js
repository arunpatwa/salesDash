import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import dataRoutes from "./routes/data.js"
import pagesRoutes from "./routes/pages.js"
import chartsRoutes from "./routes/charts.js"


import dotenv from 'dotenv';

import helmet from 'helmet';

import morgan from 'morgan';

dotenv.config();
const app=express();
app.use(express.json());

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))

app.use(morgan("common"))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());


app.use("/data",dataRoutes);

app.use("/pages",pagesRoutes);

app.use("/charts",chartsRoutes)

const PORT=process.env.PORT || 9000;


const clientOptions = {useNewURLParser:true,useUnifiedTopology:true};
mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT,()=>console.log(`Server is running on port ${PORT} and mongoDB connected`));
})
.catch((err)=> console.log(`${err} did not connect`));


