
export const isValidAuthHeader = async (authHeader : string) : Promise<boolean> => {
    return authHeader === 'DUMMY'
}

export const sleep = async(delay : number) : Promise<void> => new Promise((resolve, reject) => setTimeout(resolve, delay)) 