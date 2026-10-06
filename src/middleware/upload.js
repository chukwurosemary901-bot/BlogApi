import multer from 'multer'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const uploadDirectory = join(dirname(fileURLToPath(import.meta.url)), '../uploads')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, uploadDirectory)
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + '-' +file.originalname)
    }
})

export const upload = multer({
    storage: storage
})


// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, 'uploads/')
//     },
//     filename: function(req, file, cb){
//         cb(null, Date.now() + '-' +file.originalname)
//     }
// })

// export const upload = multer({
//     storage: storage
// })