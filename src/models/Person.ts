interface Person {

    name : string, 
    age : number, 
    id : number
    job_description : string 
}

export interface PersonSaveStatus {
    "status": "ok"|"error"
}

export default Person 