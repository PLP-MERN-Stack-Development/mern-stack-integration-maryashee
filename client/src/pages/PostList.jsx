import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => (
  <div>
    <h1>All Posts</h1>
    <Link to="/new">Create New Post</Link>
    {posts.length === 0 && <p>No posts yet</p>}
    {posts.map(post => (
      <div key={post._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
        <Link to={`/posts/${post._id}`}>
          <h2>{post.title}</h2>
        </Link>
        <p>{post.content}</p>
      </div>
    ))}
  </div>
);

export default PostList;
