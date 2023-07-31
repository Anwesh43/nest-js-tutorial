import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import Person, { PersonKey, PersonRecord } from "src/models/Person";
import { PersonValueDao } from "src/typing";
import { validatePerson } from "src/utils/MockAsyncUtils";

@Injectable()
export default class StringToPersonPipe implements PipeTransform<PersonValueDao, Person> {

    transform(value : PersonValueDao, metadata : ArgumentMetadata) : Person {
        let newval : string  = value.value
        if (typeof newval !== "string") {
           
            //throw new BadRequestException("not a string")
        } 
        console.log("VALUE___", value)
        const personParts : string[] = newval.split(", ")
        if (!validatePerson(personParts)) {
            throw new BadRequestException("can't transform to Person")
        }
        const person = {}

        personParts.map(e => e.split("=")).map(p => p as PersonRecord).forEach((p : PersonRecord) => {
            person[p[0]] = p[1]
        })
        console.log("PERSON", person)
        return person as Person 
    }
}