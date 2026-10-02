import { Router } from "express";
import * as userControllers from './users.controllers.js'
import { auth } from "../middleware/auth.js";
export const userRouter  = Router()

userRouter.post('/signUp', userControllers.signUpControllers )
userRouter.post('/login', userControllers.loginControllers)
userRouter.patch('/editprofile', auth, userControllers.editProlifeControllers)
userRouter.get('/', userControllers.allUsers )