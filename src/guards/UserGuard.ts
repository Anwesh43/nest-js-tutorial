import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";
import { isValidAuthHeader } from "src/utils/MockAsyncUtils";

@Injectable()
export default class UserGuard implements CanActivate {

    canActivate(ctx : ExecutionContext) : boolean | Promise<boolean> | Observable<boolean> {
        const req : Request = ctx.switchToHttp().getRequest()
        return isValidAuthHeader(req.headers.authorization)
    }
}

