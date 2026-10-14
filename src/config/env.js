
import dotenv from 'dotenv'

dotenv.config()

export const configuration = {

    DB :{
        name: process.env.NAME,
        password: process.env.PASS,
        user: process.env.USER,
        host: process.env.HOST
    },
    APP: {
        access_Key: process.env.ACCESS_TOKEN,
        port: process.env.PORT,
        nodeEnv : process.env.NODE_ENV,
        dataBaseURL : process.env.DATABASE_URL
        
        
    }

} 