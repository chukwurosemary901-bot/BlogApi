import  jwt from 'jsonwebtoken'
import { configuration } from '../config/env.js'
export const accessToken = async (payload) => {
    
return jwt.sign(payload, configuration.APP.access_Key, { expiresIn: '10h'}  )

}