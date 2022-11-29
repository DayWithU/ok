import express from "express";
import dotenv from 'dotenv';

import cors from 'cors';
import bodyParser from "body-parser";

//Components
import Connection from "./database/db.js";
import Router from './routes/route.js'


dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', Router);
const PORT = 4000;

app.listen(PORT, (error) =>{
    if(!error)
        console.log(`Server is Successfully Running; App is listening on port ${PORT}`);
    else 
        console.log("Error occurred, server can't start", error);
    }
);

const username = process.env.UserName;
const password = process.env.Password;

Connection(username,password);

