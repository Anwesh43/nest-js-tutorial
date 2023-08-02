import { Body, Controller, Get, Inject, Param, Post, UseFilters, UseGuards, UseInterceptors, UsePipes } from "@nestjs/common";
import CommonExceptionFilter from "./exceptionfilters/CommonExceptionFilter";
import UnauthorizedExceptionFilter from "./exceptionfilters/UnauthorizedExceptionFilter";
import UserGuard from "./guards/UserGuard";
import LoggingInterceptor from "./interceptors/LoggingInterceptor";
import ResponseInterceptor from "./interceptors/ResponseInterceptor";
import Person, { PersonSaveStatus } from "./models/Person";
import PersonService from "./person.service";
import StringToPersonPipe from "./pipes/StringToPersonPipe";
import { SuccessResponse } from "./typing";

@UseFilters(CommonExceptionFilter)
@UseInterceptors(LoggingInterceptor)
@Controller("/person")
export default class PersonController {

    @Inject()
    personService : PersonService

    @UseInterceptors(ResponseInterceptor)
    @Get("/all")
    public getPersons() : Array<Person> {
        return this.personService.getPersons()
    }

    @UseInterceptors(ResponseInterceptor)
    @Get("/:id")
    public findPersonById(@Param('id') id : string) : Person | {} {
        return this.personService.findPersonById(parseInt(id)) || {}
    }

    @Post("/save")
    public savePerson(@Body() personDao : Person) : PersonSaveStatus {
        this.personService.inserPerson(personDao)
        return {
            "status": "ok"
        }
    }

    @Get("byname/:name")
    @UseGuards(UserGuard)
    @UseFilters(UnauthorizedExceptionFilter)
    public findPersonByName(@Param('name') name : string) {
        return this.personService.findPersonByName(name)
    }

    @Post("savebystring")
    @UsePipes(StringToPersonPipe)
    public savePersonByString(@Body() person : Person) : SuccessResponse {
        console.log("PERSON___", person)
        this.personService.inserPerson(person)
        return {
            "status": "ok",
            "message": "saved person successfully"
        }
    }
}