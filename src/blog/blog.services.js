
import { Op, where } from 'sequelize'
import { Blog } from '../models/blog.js'
import { User } from '../models/user.js'

export const createContent = async (value) => {

    return await Blog.create(value)
}

// export const findBlog = async (value) => {


//     return await Blog.findAll({
//         where: value
        
//     }
// )

// }

export const findBlog = async ({title}) => {

console.log(' This is my title',title);

    return await Blog.findAll({
        where: {
            title: {
                  [Op.iLike]: `%${title}%`
            }
        }
    })
    
}
 
export const findUser = async ({search}) => {
console.log( 'This is my current search', search);

    return await User.findAll({

        where: {
            [Op.or]: [
                {
                    firstName: {
                        [Op.iLike]: `%${search}%`
                    }
                },
                {
                    lastName:{
                    [Op.iLike]: `%${search}%`
                        }
                            } 
            ]
        
        }

    })
    
}

export const checkUserBlog = async (blog, id ) => {

   return await Blog.findOne({
    where: blog, id
   } 
)

}
export const deleteUserBlog = async (blog) => {

    return await Blog.destroy(
      { where: blog }
  )
    
}

export const updateBlog = async (blog, id) => {
    
return await Blog.update(blog, {
    where: id
})

}