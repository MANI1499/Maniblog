import { Link } from 'react-router-dom';

const BlogList = ({ getBlogs,title }) => {

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {getBlogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <Link to={`/blogs/${ blog.id }`}>
                    <h2>{ blog.title}</h2>
                    <small>{blog.author}</small>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;