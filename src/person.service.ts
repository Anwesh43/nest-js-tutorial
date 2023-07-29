import { BadRequestException, HttpException, Inject, Injectable } from "@nestjs/common";
import Person from "./models/Person";
import PersonRepository from "./person.repository";

@Injectable()
export default class PersonService {

    @Inject()
    personRepository : PersonRepository 

    getPersons() : Array<Person> {
        return this.personRepository.getPersons()
    }

    findPersonById(id : number) : Person | null {
        if (isNaN(id)) {
            throw new Error("id should be number")
        }
        const person =  this.personRepository.getPersonById(id)
        if (!!person) {
            return person 
        }
        throw new HttpException("The person with the above Id is not present", 404, {
            cause: new Error(),
            description: "The person with the above Id is not present"
        })
    }

    inserPerson(person : Person) {
        this.personRepository.insertPerson(person)
    }

    findPersonByName(name : string) : Person | null {
        return this.personRepository.getPersonByName(name)
    }
}