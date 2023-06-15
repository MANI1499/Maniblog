import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import UpdateBlog from './UpdateBlog';

function App() {


  return (
    <Router>
    <div className="App">
    <Navbar />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/blog/:id" element={<UpdateBlog />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
