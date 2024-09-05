import React from 'react';
import PostCard from './PostCard';

const FeedList = ({ posts }) => (
  <div className="feed-list">
    {posts.map(post => (
      <PostCard key={post.id} title={post.title} content={post.content} />
    ))}
  </div>
);

export default FeedList;
