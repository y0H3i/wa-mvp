import React, { useState } from 'react';

function CreatePost() {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the post to your server
    console.log('New post:', content);
    setContent('');
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;