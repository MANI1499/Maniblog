import { useParams, useNavigate, Link } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const { data: getBlogs, error, isLoading } = useFetch(' https://db-rose.vercel.app/blogs/' + id)


    const deleteBlog = () => {

        fetch(' https://db-rose.vercel.app/blogs/'+ id, {
            method: 'DELETE'

        }).then (() => {
            navigate('/')
        })
    }

    const updateBlog = () =>{
        <Link to={`/blog/${ id }`}>
             </Link>
    }
    
 
    return (
        <div>
        { isLoading && <p>Loading data...</p> }
        { error && <div>{ error }</div>}
        { getBlogs && (
            <article>
                <h2>{ getBlogs.title }</h2>
                <p>Written by { getBlogs.author }</p>
                <div>{ getBlogs.body }</div>
                
                
        <button onClick={ deleteBlog }>Delete</button>
        <Link to={`/blog/${ id }`}>
            <a> Update</a>
             </Link>
            </article>
        )}
        </div>
    )
}

export default BlogDetails;