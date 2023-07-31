
export const isValidAuthHeader = async (authHeader : string) : Promise<boolean> => {
    return authHeader === 'DUMMY'
}

export const sleep = async(delay : number) : Promise<void> => new Promise((resolve, reject) => setTimeout(resolve, delay)) 

export const validatePerson = (personParts : string[]) : boolean => {
    if (personParts.length != 4) {
        return false 
    }
    const keySet : Set<string> = new Set(['name', 'age', 'id', 'job_description'])
    //console.log("TRASNFORMED", personParts.map(entry => entry.split("=")[0]).filter(key => keySet.has(key)))
    return personParts.map(entry => entry.split("=")[0]).filter(key => keySet.has(key)).length == keySet.size
}

