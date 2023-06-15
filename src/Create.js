import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Lui');
    const [isload, isLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        
        isLoading(true);

        fetch(' http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            isLoading(false);
            console.log('new blog added')
            setTitle('');
            setBody('');
            setAuthor('');
        })

        navigate('/');
    }

    return (
        <div>
            
        <div className="create">
            <h2> Createa New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label> Blog Title:</label>
                <input
                    type="text"
                    required
                    value={ title }
                    onChange= {(e) => setTitle(e.target.value)}
                />
                <label> Blog Content:</label>
                <textarea
                    required
                    value={ body }
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label> Blog Author:</label>
                <select
                value= {author}
                onChange= {(e) => setAuthor(e.target.value)}
                >
                    <option value="mani">Mani</option>
                    <option value="Lui">Lui</option>
                </select>
                { !isload && <button>Add Blog</button>}
                { isload && <button disabled> Adding Blog.... </button>}
            </form>
        </div>
        </div>
    );
}

export default Create;