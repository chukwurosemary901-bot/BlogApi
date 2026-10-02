
import joi from 'joi'

export const createCommentSchema = joi.object({
    comment: joi.string().required()
    .messages({
        'any.required': 'Your comment cannot be empty',

    }),
    blogID: joi.string().required()
    .messages({
        'any.required': 'You need a blog to comment on'
    })
})