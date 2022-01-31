require('dotenv').config();

import express from "express";
import config from './config/default';
import connect from './utils/connect';

const port : number = config.port;
const url : string = config.url;

const app = express();

app.use(express.json());

app.listen(port, async () => {    
    console.info( `server started at ${url}:${port}`);
    await connect();
});