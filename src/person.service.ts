import { Inject, Injectable } from "@nestjs/common";
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
        return this.personRepository.getPersonById(id)
    }

    inserPerson(person : Person) {
        this.personRepository.insertPerson(person)
    }
}