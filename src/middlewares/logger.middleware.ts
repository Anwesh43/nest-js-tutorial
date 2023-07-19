import { NestMiddleware, Request, Response } from "@nestjs/common";
import { NextFunction } from "express";


export default class LoggerMiddleware implements NestMiddleware {
    use(req : Request, res : Response, next : NextFunction) {
        console.log('MXXX_REQUEST', req.url)
        next();
    }
}