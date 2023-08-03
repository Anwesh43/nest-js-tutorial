import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

const Cookie = createParamDecorator<string>((data : string, ctx : ExecutionContext) => {
    console.log("IN_CCOKIE", data)
    const req : Request = ctx.switchToHttp().getRequest()
    const cookies : string = req.headers['cookie']
    const cookieParts : string[] = cookies.split(";")
    const cookiePartsObj : Record<string, string> = {}
    cookieParts.map(cookiePart => cookiePart.split("=")).forEach((cookiePartArr => {
        cookiePartsObj[cookiePartArr[0]] = cookiePartArr[1]
    }))
    console.log("IN_CCOKIE", cookieParts)
    return cookiePartsObj[data]
})

export default Cookie 