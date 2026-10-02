import express from 'express'
import { Router } from 'express'
import { userRouter } from '../users/users.routes.js'
import { blogRouter } from '../blog/blog.routes.js'

export const mainRouter = Router()

mainRouter.use('/users', userRouter)
mainRouter.use( '/blog', blogRouter )
