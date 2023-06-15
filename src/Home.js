import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () =>{
    const { data: getBlogs, isLoading, error } = useFetch(' http://localhost:8000/blogs');

    const [name, setName] = useState('Mani1');

 

   

    // useEffect( () =>{
    //     console.log(name);
    // }, [name]);
 
    return (
        <div className="home">
            { error && <div> Error : { error }</div> }
            { isLoading &&  <div>Loading...</div> }
           {getBlogs && <BlogList getBlogs={getBlogs} title="All Blogs!" />}
        </div>
    );
}
export default Home;