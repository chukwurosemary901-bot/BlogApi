import { Follow, User } from "../models/index.js"
import { updateProfile } from "../users/users.services.js";

 export const followControllers = async (req, res) => {

    try {
        console.log(req.user);
        
        const followersID  = req.user.id

        const  {followingID}  = req.params
console.log(followingID);

        if (followersID === followingID) {

            return res.status(400).json({
                message: 'You cannot follow yourself'
            })
        }

        const userToFollow = await User.findByPk(followingID)

        if (!userToFollow) {
            return res.status(404).json({
                message: "Blogger not found"
            });
        }

        const alreadyFollowing = await Follow.findOne({
            where: {
                followersID,
                followingID
            }
        })

        if (alreadyFollowing) {
            
            return res.status(400).json({
                message: 'You are already following this Blogger'
            })
        }

        await Follow.create( {
            followersID,
            followingID
        } )

    //   {  await User.increment('followingCount', {
    //         where:{
    //             id: followersID
    //         }
    //     })

    //     await User.increment('followersCount', {
    //         where: {
    //             id: followingID
    //         }
    //     })
    // }

    const findFollowing = await Follow.findAll({
        where: {followersID}
    })

    const totalFollowing = findFollowing.length

    
       const findFollowers = await Follow.findAll({
           where: {followingID}
        })
        
        const totalFollowers = findFollowers.length
        
    await updateProfile({followingCount: totalFollowing}, { followersID})
    
    await updateProfile({followersCount: totalFollowers}, { followingID})

        return res.status(201).json({
            message: 'User followed successfully'
        })
        
    } catch (error) {
        
        console.error('Error following User', error);
     
        return res.status(500).json({message: 'Internal Server Error'})
    }
    
 }