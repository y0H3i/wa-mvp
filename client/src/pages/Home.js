import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0 }}           // Start hidden
      animate={{ opacity: 1 }}           // Fade in
      transition={{ duration: 1 }}       // Over 1 second
    >
      <h1>Welcome to the Home Page</h1>
      <p>This is your awesome React app with advanced animations!</p>
    </motion.div>
  );
};

export default Home;
