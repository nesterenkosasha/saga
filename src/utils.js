
const regExp = {
    "login":/^[a-z0-9]{3,}$/,
    "password": /^[A-Z]{1}[a-z0-9]{6,}$/
}



export default async function isValid(target, value){
    console.log(target, value)
    try{
        if(!regExp[target].test(value)) throw new Error('Data is not valid')
    } catch({ message }){
        console.error(message)
    }
}
