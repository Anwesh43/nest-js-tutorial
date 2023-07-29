import { ArgumentsHost, Catch, ExceptionFilter, ForbiddenException, UnauthorizedException } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(ForbiddenException)
export default class UnauthorizedExceptionFilter implements ExceptionFilter {

    catch(error : unknown, host : ArgumentsHost) {
        const req : Request = host.switchToHttp().getRequest()
        const res : Response = host.switchToHttp().getResponse()
        res.status(401).json({
            message: "Authorization header Is Not present"
        })
    }
}