import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });
    const newPost = await res.json(
      {
        "message":"cannot find URL",
        sucess:false
      }
    );
    addPost(newPost);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
