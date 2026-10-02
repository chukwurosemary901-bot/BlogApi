
import joi from 'joi'

const thirteenYearsAgo = new Date()
console.log(thirteenYearsAgo);

thirteenYearsAgo.setFullYear(thirteenYearsAgo.getFullYear() - 13)
console.log(thirteenYearsAgo);

const hundredYearsEarlier =  new Date()

hundredYearsEarlier.setFullYear(hundredYearsEarlier.getFullYear() - 100)

export const userSignUpSchema = joi.object({
    firstName: joi.string().required().min(2).max(50).trim()
   .messages({
        'any.required': 'firstName field is required',
        'string.base': 'First name must be a valid name (letters only)',
       'string.min': 'First name must be at least 2 characters',
        'string.max': 'First name is too long (maximum 50 characters)',
        'string.empty': 'first name cannot be empty'
    }),
    lastName: joi.string().required().min(2).max(50).trim()
    .messages({
        'any.required': 'lastName field is required',
        'string.base': 'lastName must be a valid name (letters only)',
       'string.min': 'lastName must be at least 2 characters',
        'string.max': 'lastName is too long (maximum 50 characters)',
        'string.empty': 'last name cannot be empty'
    }),
    date_of_Birth: joi.date()
    

    .iso()
    
    .required()
     
    .min(hundredYearsEarlier)
    
    .max(thirteenYearsAgo)
    .messages({

        'date.format': 'Date must be in YYYY-MM-DD format. For example: 2008-01-01',

        'date.min': 'Sorry, Your are too old to register',
        
        'date.max': ' You must be at least 13 years to register',

        'any.required': 'Your date of birth is required',
    }),

    gender: joi.string()
    .valid( 'male', 'female', 'others', 'prefer_not_to_say ')
    .insensitive()
    .required()
    .messages({
        'any.required': 'Gender field is required',
        'string.base': 'Invalid input',
        'any.only': 'Gender must be one of; male, female, others, or prefer not to say',
    }),

    country_code:
    joi.string().required()
    .messages({
        'any.required': 'Country code field is required',
        'string.base': 'Invalid input'
    }),
    
     phone_number: joi.string().required()
     .messages({
        'any.required': 'Please input your phone number'
     }),

     email: joi.string().email().required()
     .messages({
        'string.email': 'Please input a valid email',
        'any.required': 'Email field must be entered',
        'string.base': 'Please your email should have this format should be: abc@gmail.com, ac@yyahoo.com, abc@outlook.com etc ',
        'string.empty': 'Email field must be entered'
     }),

     profilePicture: joi.string(),

    is_Blogger: joi.string(),

    blogName: joi.string(),

    password: joi.string().required()
    .messages({
        'any.required': 'Pasword field is required',
        'string.empty': 'Password field must be entered'
    })
})

export const userLoginSchema = joi.object({

    email: joi.string().email().required()
     .messages({
        'string.email': 'Please input a valid email',
        'any.required': 'Email field must be entered',
        'string.base': 'Please your email should have this format should be: abc@gmail.com, ac@yyahoo.com, abc@outlook.com etc '
        
     }),

      password: joi.string().required()
    .messages({
        'any.required': 'Pasword field is required',
        
    })
})

export const editProlifeSchema = joi.object({
    
profilePicture: joi.string().min(2).max(50) ,

firstName: joi.string().min(2).max(50).messages({
        'string.base': 'Your numa must contain at least one letter',
        
    }) ,

lastName: joi.string().min(2).max(50),

date_of_Birth: joi.string().min(2).max(50) ,

gender: joi.string().min(2).max(50),

country_code: joi.string().min(2).max(50),

phone_number: joi.string().min(2).max(50),

email: joi.string().email().min(2).max(50),

blogName: joi.string().min(2).max(50),


}).min(1)
.messages({
    'object.min': 'Please edit at least a profile section or exit ',
    // 'string.base': ''
})


// // let ret = userSchema.validate({
// //     date_of_Birth: '1881-05-27'})
// // if (ret.error) {
// //     console.log("❌ Validation Failed:");
// //     console.log(ret.error.details[0].message);
// // } else {
// //     console.log("✅ You can register! All validations passed successfully.");
// //     console.log("Validated Data:", ret.value);
// // }


// // let genderCheck = userSchema.validate({

// // gender: 234,

// // })

// // console.log(genderCheck.error);}
// // let emailCheck = userSchema.validate({

// // email: 'emm@gmail.com',

// // })
// // if ( emailCheck.error){
// //     console.log('Verification failed');
    
// // }
// // else{
// //     console.log('Succesful registration');
    
// // }

// // console.log(emailCheck.error);

// let first = 234
// let second = 347890
// let together = first + second
// console.log(together);
