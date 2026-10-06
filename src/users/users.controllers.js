import parsePhoneNumberFromString from 'libphonenumber-js'
import { comparePassword, hashPassword } from '../utils/bcrypt.js'
import { editProlifeSchema, userLoginSchema, userSignUpSchema } from '../validators/users.js'
import { findUser, findUserbyEmail, loginUser, signUpUser, updateProfile, viewAllBloggers } from './users.services.js'
import { sanitize } from '../utils/sanitize.js'
import { accessToken } from '../validators/token.js'
import { User } from '../models/index.js'
import { Blog } from '../models/index.js'
// import express from 'express'
// signup

export const allUsers = async (req, res) => {
    
try {
    
// const userLoggedIn = req.user.id

const allUsers = await viewAllBloggers()

console.log('All usrers',allUsers);

const allBloggers = await Promise.all( allUsers.map((user) => sanitize(user)))
     
console.log(allUsers);


return res.status(200).json({ message: 'All Users', allBloggers })


} catch (error) {
    
console.error('Error getting all Users', error);

return res.status(500).json({message: 'Internal Server error'})


}

}



export const signUpControllers = async (req, res) => {
    
    try {
        console.log('a');
        
        const {error, value} = userSignUpSchema.validate(req.body)
        console.log(req.body);

        if(error){

            return res.status(400).json({message: error.message})
        
        }

        let { firstName, lastName, date_of_Birth, gender, country_code, 
            
            phone_number, email, D_O_B,  password   } =  value
            
            console.log('This is our validated inputs', value);
            console.log('dfxxfgg');

        if(value.phone_number ){
            
            const parsedNumber = parsePhoneNumberFromString(value.phone_number, value.country_code)
        
            console.log(parsedNumber);

        if(!parsedNumber || !parsedNumber.isValid()) {
           
            return res.status(400).json({ message: 'Phone number is invalid for the selected country' })
        
        }
        // console.log('First original ', value.phone_number);

        value.phone_number = parsedNumber.number

        value.country_code = parsedNumber.country

        console.log('New country code', value.country_code);
        
        console.log('Second original', value.phone_number);

        // console.log('Second ',parsedNumber.number);
        
        
        }
    
        //  find if user exists with that email
        const findEmail = await findUserbyEmail({email: value.email})

        if(findEmail) return res.status(400).json({ message: 'Email already exists, pls try again'})

        // encrypt the given password
         let pass = value.password

        const hash = await hashPassword(pass)

        console.log('Hashed password', hash);

        value.password = hash

        value.D_O_B = value.date_of_Birth
        
        console.log(value);
        
        const userSignUp = await signUpUser( value )

        const yourProfile = await sanitize(userSignUp)

        return res.status(201).json({message: 'Your account has been created succesfully , Pls you can go back to edit your profile picture and customize your blogName', yourProfile})
        


    } catch (error) {
        
        console.error('Error signing up user', error);
        
        return res.status(500).json({message: 'Internal server error'})

    }

}


// login
export const loginControllers  = async (req, res) => {
    
    try {
        
        const { error, value } = userLoginSchema.validate(req.body)

        console.log(value);
        
        if (error) {
            return res.status(400).json({message: error.message})
        }
        // destructure
        let { password, email } = value

        const findEmailExists = await loginUser({email})

        
        if(!findEmailExists) return res.status(400).json({ message: 'Email does not exist, pls try again' })
            
        console.log("findEmailExists", findEmailExists.toJSON());
        
        const passwordCheck = await comparePassword(password, findEmailExists.password)

        if(!passwordCheck) return res.status(400).json({ message: 'Incorrect password, kindly try again'})
            
        const { id, role} = findEmailExists

        console.log(id);
        
        const access = await accessToken({id, role})
        
        console.log(access);
        // const findPost = await findUser({id})
        const findPost = await User.findByPk(id, {
            include:{
                model: Blog,
                as: "blogsPosted"
            }
        });
        
        console.log('blogs Posted', findPost.toJSON());
        // console.log('blogs Posted',  findPost.blogsPosted.map(blog => sanitize(blog)));
        
        console.log( 'findPost', findPost.blogsPosted.map((x) => x.toJSON()));

        let No_Of_Posts = findPost.blogsPosted.length
        
        console.log('Number', No_Of_Posts);
        
        await updateProfile({ No_Of_Posts }, { id })
        
        await findEmailExists.reload()

        const yourProfile = await sanitize(findEmailExists)

        // console.log('Import', fileURLToPath( import.meta.url))
        
        
        return res.status(200).json({ message: 'You have just logged in successfully', yourProfile, access })
        
    } catch (error) {

        console.error('Error loging in user', error);
        
        return res.status(500).json({message: 'Internal server error'})

        
    }

} 


export const editProlifeControllers =  async (req, res) => {

try {
    
    const  user  = req.user
    
    console.log('My USER', user);
    
 const { error, value } = editProlifeSchema.validate(req.body)

 console.log('This si my value', value);
 console.log('This si my rebody', req.body);
 
//  if(Object.ke)
 if(error){

    return  res.status(400).json({message: error.message})
 
}

    console.log('Useeer', user.id);

    const updatedProfile = await updateProfile(req.body, {id: user.id})

    const yourNewProfile = await findUserbyEmail({id: user.id})

    console.log('How  far my new profile', yourNewProfile);

    // console.log('My updated profile', updatedProfile);

    const yourProfile = await sanitize(yourNewProfile)

return  res.status(200).json({message: 'Your profile has been updated successfully.', yourProfile })
}
 catch (error) {

    console.error('Error editing users profile', error);

    return res.status(500).json({message: 'Internal server error'})
    

    
}




}


