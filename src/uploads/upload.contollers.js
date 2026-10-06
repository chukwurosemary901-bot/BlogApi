import { findUserbyEmail, updateProfile } from "../users/users.services.js"


export const uploadProfilePicture = async (req, res) => {

    try {

    const { id } = req.user

    if(!id){
        return res.status(400).json({message: 'pls login'})
    }

    if (!req.file) {
        return res.status(400).json({ message: 'Profile picture file is required' })
    }

    console.log('Request file', req.file);
    
    const profilePicture = `/uploads/${req.file.filename}`
//     { const imageUrl = `${req.protocol}://${req.get('host')}${profilePicture}`

//     //  const profilePicture = req.file? 
//     // req.file.path 
//     // : null
//     // const imageUrl = req.file
//     // ? `http://localhost:2008/${req.file.path}` 
// }
    await updateProfile({profilePicture}, {id})
    
    const user = await findUserbyEmail({id})

    return res.status(201).json({
        message: 'You have successfully uploaded you profile Picture',
        user,
        // imageUrl
    })

    } catch (error) {
      
        console.error('Error uploading profile picture', error);

        return res.status(500).json({
            message: 'Internal Server Error'
        })
        

    }
    
}