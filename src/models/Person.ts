
interface Person {

    name : string, 
    age : number, 
    id : number
    job_description : string 
}

export type PersonRecord = [
    PersonKey, 
    any 
]

export type PersonKey = keyof Person 

export interface PersonSaveStatus {
    "status": "ok"|"error"
}

export default Person 