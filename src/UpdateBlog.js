import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Lui');
    const { id } = useParams();
    const navigate = useNavigate()
    const { data: getBlogs, error, isLoading } = useFetch(' http://localhost:8000/blogs/' + id)


    const updateBlog = () => {

        fetch(' http://localhost:8000/blogs/'+ id, {
            method: 'PUT'

        }).then (() => {
            navigate('/')
        })
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
                
                
        <button onClick={ updateBlog }> Update</button>
            </article>
        )}

<form onSubmit={handleSubmit}>
                <label> Blog Title:</label>
                <input
                    type="text"
                    required
                    value={ getBlogs.title }
                    onChange= {(e) => setTitle(e.target.value)}
                />
                <label> Blog Content:</label>
                <textarea
                    required
                    value={ getBlogs.body }
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label> Blog Author:</label>
                <select
                value= {getBlogs.author}
                onChange= {(e) => setAuthor(e.target.value)}
                >
                    <option value="mani">Mani</option>
                    <option value="Lui">Lui</option>
                </select>
                { !isload && <button>Update Blog</button>}
                { isload && <button disabled> Updating Blog.... </button>}
            </form>
        </div>
    )
}

export default BlogDetails;