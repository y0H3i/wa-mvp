import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeedList from '../components/FeedList';

const Home = () => {
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  ];

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
};

export default Home;
