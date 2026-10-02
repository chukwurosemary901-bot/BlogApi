import jwt from 'jsonwebtoken'
// import  configuration  from '../config/env.js'

import { configuration } from '../config/env.js';

export const auth = async (req, res, next) => {
    
try {
    
    const authHeader = req.headers.authorization

    console.log('Our very',req.headers.authorization);
    console.log('Our very authheader',authHeader);
    
    if(!authHeader) return res.status(400).json({message: 'No token provided, pls re-login'})

    const token = authHeader.split(' ')[1]

    console.log('Our very own token',token);
    
    if (!token) return res.status(400).json({message: 'Token is necessary, kindly relogin'})

    jwt.verify(token, configuration.APP.access_Key, (error, user) =>{

    if(error) return res.status(400).json({message: 'This session has expierd, kidly relogin'})

        req.user = user
        
        console.log('Our own user', user);
        
        next()
    } )
} catch (error) {
    console.error('Error authorizing user', error);
    
return res.status(500).json({message: 'Internal Server Error'})

}

}

const staffAuth =( req, res, next) => {


    try {
        const { role } = req.user
          if(role !== "Administrator"){

        return res.status(403).json({
            message: 'Access Denied'
        })
    }
    next()
    } catch (error) {
        
console.error('Error authorizing admin role');

return res.status(500).json({message: 'Internal Server Error'})


    }
  
}