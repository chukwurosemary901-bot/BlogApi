import express from 'express';
// import { userSchema } from './validators/users.js';
import { Router } from 'express';
import { configuration } from './config/env.js';
import { sequelize } from './config/sequelize.js';
import { mainRouter } from './utils/routes.js';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import cors from 'cors'

const app = express()
const uploadDirectory = join(dirname(fileURLToPath(import.meta.url)), 'uploads')
console.log(uploadDirectory);

const router = Router()

app.use(cors())

app.use(express.json())

app.use('/uploads', express.static(uploadDirectory))
// app.use('/uploads',express.static('uploads'))
app.use(mainRouter)


    router.get('/starting/:id/products', (req, res) =>{
try {
    const ide = req.params.id

    const category = req.query

    const brand = req.query.brand

    // if(!ide ||  !category || !brand ){

    //     return res.status(404).json({message: `Content not found ` })
    // }

    // console.log(req.query);

    return res.status(200).json({message: `Hello, welcome id ${ide}, you purchased a ${category}, which is  ${brand}`})



} catch (error) {
    console.error(error, `internal server error`);
    
}
})

app.use(router)


























































app.listen(configuration.APP.port, async () => {
    
try {

  await sequelize.authenticate();
  
  console.log('Connection has been established successfully.');

} catch (error) {
  
    console.error('Unable to connect to the database:', error);
}
    try{ 
        console.log(`server running on http://localhost:${configuration.APP.port}`);
    
} catch (error) {
    
 console.error('Unable to run your server:', error);
    
}

})