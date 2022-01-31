import express from "express";
import config from './config/default';

const port : number = config.port;
const app = express();

app.use(express.json());

app.listen(port, () => {    
    console.log( `server started at http://localhost:${port}`);
});