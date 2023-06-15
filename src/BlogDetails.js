import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const { data: getBlogs, error, isLoading } = useFetch(' http://localhost:8000/blogs/' + id)


    const deleteBlog = () => {

        fetch(' http://localhost:8000/blogs/'+ id, {
            method: 'DELETE'

        }).then (() => {
            navigate('/')
        })
    }

    const updateBlog = (id) =>{
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
        <button onClick={ updateBlog(getBlogs.id) }> Update</button>
            </article>
        )}
        </div>
    )
}

export default BlogDetails;