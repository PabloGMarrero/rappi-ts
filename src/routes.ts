import { Express, Request, Response } from "express";

export default function(app: Express){
    app.get("healthcheck", (req:Request, resp:Response)  => resp.sendStatus(200)); 
}