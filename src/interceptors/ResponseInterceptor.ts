import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

@Injectable()
export default class ResponseInterceptor implements NestInterceptor {


    intercept(ctx : ExecutionContext, handler: CallHandler) : Observable<any>|Promise<Observable<any>> {
        return handler.handle().pipe(
            map(data => ({data}))
        )
    }
}