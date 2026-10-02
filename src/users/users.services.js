import { User } from "../models/user.js"

export const findUserbyEmail = async (email) => {
    
return await User.findOne({where: email})

}

export const signUpUser = async (value) => {

return await User.create(value)
}

export const loginUser = async (value) => {
    
    return await User.findOne({where: value})

}
export const updateProfile = async (profile , value) => {
    
    return await User.update(profile, { where: value })

}

export const viewAllBloggers = async (value) => {
    
return await User.findAll(value)

}

export const findUser = async (id) => {

    return await User.findAll({ where: id })
    
}
// export const updateUserPost =async (post, id) => {

//     return await User
    
// }