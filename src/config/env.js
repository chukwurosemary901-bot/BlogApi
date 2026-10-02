
import dotenv from 'dotenv'

dotenv.config()

export const configuration = {

    DB :{
        name: process.env.NAME,
        password: process.env.PASS,
        user: process.env.USER
    },
    APP: {
        access_Key: process.env.ACCESS_TOKEN,
        port: process.env.PORT
        
    }

} 