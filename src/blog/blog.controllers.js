import { Blog } from "../models/blog.js";
import { User } from "../models/user.js";
import { updateProfile } from "../users/users.services.js";
// import { findUserbyEmail, updateProfile } from "../users/users.services.js";
import { sanitize, sanitize2 } from "../utils/sanitize.js";
import { createblogSchema } from "../validators/blog.js";
import { blogRouter } from "./blog.routes.js";
import { checkUserBlog, createContent, deleteUserBlog, findBlog, findUser, updateBlog } from "./blog.services.js";


export const createBlog = async (req, res) => {

    try {
        
        const { id } = req.user
        // console.log(req.user);
        
        // console.log('LALALALA', id);
        console.log( ' Testing ', createblogSchema.validate  );
        
        const { error, value } = createblogSchema.validate(req.body)
        
        console.log( ' Testing 22 ', createblogSchema.validate(req.body)  );

        if (error) {
            
            return res.status(400).json({message: error.message })
        }

        // console.log(id);
        const yourPost = await createContent({...value, bloggerID: id })

        console.log('Posting is fun for me what about you', yourPost);

        const updatedStatus = await Blog.update(
            {
            status: 'posted'
            },

            {
                where: {
                    id : 
                        yourPost.id
                }
            }
        )

        await yourPost.reload();
        
        // await User.increment('No_Of_Posts', {
        //      where:{
        //          id
        //      }
        //  })
                console.log(' My post ',yourPost);
                
                const sanitizeBlog = await sanitize(yourPost)
                
                const findBlog = await Blog.findAll({
                    where: {
                        bloggerID: id
                    }
                })

                  const findBlogCount = findBlog.length 
                  console.log(findBlogCount);
                  
                await updateProfile ({ No_Of_Posts: findBlogCount }, { id })
                return res.status(201).json({
                    message: ' You have successfully created you blog ', 
            sanitizeBlog
        })
        
    } catch (error) {
        
console.error('Error creating blog', error);

return res.status(500).json({message: 'Internal Server Error'})
    }
    
}

export const searchBlog = async (req, res) => {

    try {
        
        const userLoggedIn = req.user

        const { search } = req.query

        console.log(search);
        
        const blog = await findBlog({title:  search });

        console.log(' This is my blog result',blog);
        
        const users = await findUser({ search })

    
// const Result =   await findBlog({title})

if ( blog.length === 0  &&  users.length === 0) {

    return res.status(400).json ({message: 'Not found'})
}

const sanitizedBlog =  await Promise.all( blog.map( ( blog ) =>sanitize(blog)) )


const sanitizedUser  = await Promise.all(users.map ((user) => sanitize(user)))

return res.status(200).json({message: 'Your resuts', 
    
  blog: sanitizedBlog,
  users: sanitizedUser})

    } catch (error) {
        
        console.error('Error searching blog', error);

        return res.status(500).json({message : 'Internal server error'})

    }
    
}

export const deleteBlog = async (req, res) => {

try {
    
const userLoggedIn = req.user.id

console.log('UserLoggedIn', userLoggedIn);

const { id } = req.params

const  findbloggerID  = await checkUserBlog({id})

console.log('Blogger ID', findbloggerID);

if(!findbloggerID) {

    return res.status(400).json({message: "Blog does not exist"})
}

const deleteBlog  = await deleteUserBlog({id})

return res.status(200).json({message: 'You have successfully deleted your post'})

console.log('SindBlogger', findbloggerID);

} catch (error) {
    
console.log('Error deleting blog', error);

return res.status(500).json({ message: 'Internal Serer Error' })

}

    
}

export const editBlog = async (req, res) => {

    try {
        
        const userLoggedIn = req.user.id

        const { id } = req.params

        const findBlog =  await checkUserBlog ({
            id, 
           bloggerID: userLoggedIn
        })

console.log( 'Find blog' ,findBlog);

        if(!findBlog ) {

            return res.status(400).json({messsage: 'This  Blog does not exist' })
        }

        const editBlog = await updateBlog(req.body, {id})
    
        console.log(req.body);

        await findBlog.reload()
        
        return res.status(200).json({message: 'You have updated your blog successfully', findBlog})
    
    } catch (error) {
        
        console.error('Error editing blog', error);
        
        return res.status(500).json({ message: 'Internal Server Error' })
    }
    
}

export const viewAllBlog = async (req, res) => {

    try {
        
        const userLoggedIn = req.user.id

        const allBlogs = await Blog.findAll()

        return res.status(200).json({message: 'All Blogs', allBlogs})

    } catch (error) {
        
        console.error('Error viewing allBlogs', error);
        
        return res.status(500).json({message: 'Internal Server Error'})

    }
    
}
export const viewUserBlog = async (req, res) => {

    try {
        
        const userLoggedIn = req.user.id

        const allUserBlogs = await Blog.findAll({where: 
            
           { bloggerID: userLoggedIn}
        })

        if (allUserBlogs.length === 0 ){

            return res.status(400).json({ message: `User with name ${allUserBlogs.blogName} not posted any blog`})
        }
        console.log(allUserBlogs);
        
       const yourResult=  await Promise.all(

        allUserBlogs.map((x) => sanitize2(x))
) 
        return res.status(200).json({message: 'All your Blogs', yourResult})

    } catch (error) {
        
        console.error('Error viewing allUserBlogs', error);
        
        return res.status(500).json({message: 'Internal Server Error'})

    }
    
}