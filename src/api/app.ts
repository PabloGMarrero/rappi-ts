require('dotenv').config();

import express from "express";
import config from '../config/default';
import connect from '../utils/connect';
import * as bodyParser from 'body-parser';


class App {
    private app: express.Application;
    private port : number;
    private url : string;
   
    constructor(controllers:any, port:number, url:string) {
      this.app = express();
      this.port = port;
      this.url = url;  
      this.initializeMiddlewares();
      this.initializeControllers(controllers);
    }
   
    private initializeMiddlewares() {
      this.app.use(bodyParser.json());
    }
   
    private initializeControllers(controllers:any) {
      controllers.forEach((controller:any) => {
        this.app.use('/', controller.getRouter());
      });
    }
   
    public listen() {
      this.app.listen(this.port, async () => {
        console.info( `server started at ${this.url}:${this.port}`);
        await connect();
      });
    }
  }
   
  export default App;