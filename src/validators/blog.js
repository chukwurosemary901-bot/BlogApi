
import joi from "joi";

export const createblogSchema = joi.object({
    title: joi.string().required().min(2).max(50)
    .messages({
        'any.required': 'Please give your blog a valid Title',
        'string.min': 'Your title must be at least two(2) characters long',
        'string.max': 'Your title must be at max fifty(50) characters long',

    }),
    blog: joi.string().trim().required().min(2)
    .messages({
        'any.required': 'Please create your blog ',
        'string.empty': 'Your blog cannot be empty',
        'string.min': 'Your blog must be at least two(2) characters long'
})
})