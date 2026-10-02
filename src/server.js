import express from 'express';
// import { userSchema } from './validators/users.js';
import { Router } from 'express';
import { configuration } from './config/env.js';
import { sequelize } from './config/sequelize.js';
import { mainRouter } from './utils/routes.js';

const app = express()

const router = Router()

app.use(express.json())

app.use(mainRouter)
app.use(router)



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