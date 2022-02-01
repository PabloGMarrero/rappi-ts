require('dotenv').config();

import express from "express";
import connect from './utils/connect';
import config from './config/default';
import routes from './routes';

const app: any = express();
const port = config.port;
const url = config.url; 

app.use(express.json())
app.use(express.urlencoded({extended: true}))

routes(app);

app.listen(port, async () => {
    console.info( `server started at ${url}:${port}`);
    await connect();
});