
import { Router } from "express";
import {  auth } from '../middleware/auth.js'
import * as blogControllers from './blog.controllers.js'
import { followControllers } from "../Follow/follow.controllers.js";
export const blogRouter = Router()

blogRouter.post( '/createBlog', auth,  blogControllers.createBlog  )
blogRouter.get('/',  blogControllers.searchBlog)
blogRouter.delete('/deleteBlog/:id', auth, blogControllers.deleteBlog )
blogRouter.patch('/editBlog/:id', auth,blogControllers.editBlog )
blogRouter.get('/viewAll', auth, blogControllers.viewAllBlog)
blogRouter.get('/allMyBlogs', auth, blogControllers.viewUserBlog)
blogRouter.post('/follow/:followingID',auth,  followControllers )