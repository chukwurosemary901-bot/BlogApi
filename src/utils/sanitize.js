
export const sanitize = async (value) => {

    console.log('First value,', value);
    
    const plainUser = value.toJSON()

    console.log('plain Value', plainUser);
    

const { password, role, status, is_Verified, bloggerID, gender,D_O_B, 
    
    country_code, is_Blogger, updatedAt,createdAt, ...sanitizedData } = plainUser;

console.log('plain', plainUser);

console.log('sanitize', sanitizedData);


return sanitizedData

}

export const sanitize2 = async (value) => {
    
    const plainUser = value.toJSON()

    const {id, bloggerID, status, createdAt, updatedAt, ...sanitizedData } = plainUser

    console.log(sanitizedData);
    
return sanitizedData

} 


// const updatedProfile = await updateProfile(req.body, {id: user.id})

// const yourNewProfile = await findUserbyEmail({id: user.id})

// // console.log('My updated profile', updatedProfile);

// const yourProfile = await sanitize(yourNewProfile)

// return  res.status(200).json({message: 'Your profile has been updated successfully.', yourProfile })