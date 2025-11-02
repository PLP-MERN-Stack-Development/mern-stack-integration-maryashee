import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PostList from "./pages/PostList.jsx";
import PostForm from "./pages/PostForm.jsx";
import PostDetails from "./pages/PostDetails.jsx";




function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  const addPost = (newPost) => setPosts([newPost, ...posts]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList posts={posts} />} />
        <Route path="/new" element={<PostForm addPost={addPost} />} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
