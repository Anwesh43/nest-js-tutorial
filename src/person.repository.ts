import { Injectable } from "@nestjs/common";
import Person from "./models/Person";

type PersonKey = keyof Person 

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

    filterByKey(key : PersonKey, value : unknown) : Person | null {
        const filteredPersons : Array<Person> = this.persons.filter((person : Person) => person[key] === value)
        console.log("FILTERED_PERSONS", filteredPersons, this.persons)
        return filteredPersons.length > 0 ? filteredPersons[0] : null  
    }

    getPersonByName(name : string) : Person | null {
        return this.filterByKey('name', name)
    }
}