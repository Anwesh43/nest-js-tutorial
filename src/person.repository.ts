import { Injectable } from "@nestjs/common";
import Person from "./models/Person";

@Injectable()
export default class PersonRepository {

    persons : Array<Person> = []
    
    getPersons() : Array<Person> {
        return this.persons 
    }

    getPersonById(id : number) : Person | null  {
        const persons = this.persons.filter(person => person.id === id)
        return persons.length > 0 ? persons[0] : null 
    }

    insertPerson(person : Person) {
        this.persons.push(person)
    }
}