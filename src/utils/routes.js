import express from 'express'
import { Router } from 'express'
import { userRouter } from '../users/users.routes.js'
import { blogRouter } from '../blog/blog.routes.js'
import { uploadRouter } from '../uploads/upload.routes.js'

export const mainRouter = Router()

mainRouter.use('/users', userRouter)
mainRouter.use( '/blog', blogRouter )
mainRouter.use('/users', uploadRouter )