import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

const Create = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Lui');
    const navigate = useNavigate();
    const [isload, isLoading] = useState(false);
    const { data: getBlogs, error } = useFetch('https://db-rose.vercel.app/blogs/' + id)



 

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        
        isLoading(true);

        fetch('https://db-rose.vercel.app/blogs/'+id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            isLoading(false);
            setTitle('');
            setBody('');
            setAuthor('');
        })

        navigate('/');
    }

    return (
        <div>
            
        <div className="create">
            <h2> Update Blog</h2>
            { error && <div>{ error }</div>}
            { getBlogs && (
            <form key={ getBlogs.id } onSubmit={handleSubmit}>
                <label> Blog Title:</label>
                <input
                    type="text"
                    required
                    defaultValue={ getBlogs.title }
                    onChange= {(e) => setTitle(e.target.value)}
                />
                <label> Blog Content:</label>
                <textarea
                    required
                    defaultValue={ getBlogs.body }
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label> Blog Author:</label>
                <select
                defaultValue= { getBlogs.author}
                onChange= {(e) => setAuthor(e.target.value)}
                >
                    <option value="mani">Mani</option>
                    <option value="Lui">Lui</option>
                </select>
                { isLoading && <button>Update Blog</button>}
                { !isLoading && <button disabled> Updating Blog.... </button>}
            </form>
            )}
        </div>
        </div>
    );
}

export default Create;