import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Ensure this matches your backend URL
});

export const fetchPosts = async () => {
    const response = await fetch('/api/posts');
    const data = await response.json();
    return data;
  };
  
  export const createPost = async (post) => {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    const data = await response.json();
    return data;
  };
  