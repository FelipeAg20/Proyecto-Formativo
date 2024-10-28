import jwt from 'jsonwebtoken';


export function generateToken (data,key){
    const token = jwt.sign({data:data},key,{expiresIn:'1h'})
    return token 
}