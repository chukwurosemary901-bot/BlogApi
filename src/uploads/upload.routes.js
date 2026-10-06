import { Router } from "express";
import { uploadProfilePicture } from "./upload.contollers.js";
import { upload } from "../middleware/upload.js";
import { auth } from "../middleware/auth.js";
export const uploadRouter = Router()

uploadRouter.post('/profile', auth,
    upload.single('profilePicture'),
    uploadProfilePicture
   )