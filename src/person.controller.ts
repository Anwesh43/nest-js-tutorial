import { Body, Controller, Get, Inject, Param, Post, UseFilters } from "@nestjs/common";
import CommonExceptionFilter from "./exceptionfilters/CommonExceptionFilter";
import Person, { PersonSaveStatus } from "./models/Person";
import PersonService from "./person.service";

@UseFilters(CommonExceptionFilter)
@Controller("/person")
export default class PersonController {

    @Inject()
    personService : PersonService

    @Get("/all")
    public getPersons() : Array<Person> {
        return this.personService.getPersons()
    }

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
}