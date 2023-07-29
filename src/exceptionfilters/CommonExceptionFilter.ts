import { ArgumentsHost, Catch } from "@nestjs/common";
import { ExceptionFilter, HttpArgumentsHost } from "@nestjs/common/interfaces";
import { Request, Response } from "express";

@Catch()
export default class CommonExceptionFilter implements ExceptionFilter{

    catch(error : unknown, host : ArgumentsHost) {
        const ctx : HttpArgumentsHost  = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        const request = ctx.getRequest<Request>()
        const err : Error = error as Error 
        response.status(500).json({
            url : request.url,
            params: request.params,
            message: err.message || err.name,
            stack : err.stack
        })
    }
}