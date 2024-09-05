import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

const Header = () => {
  return (
    <motion.header 
      className="navbar"
      initial={{ y: -100 }} // Animation starts with header out of view
      animate={{ y: 0 }}    // Animate to its original position
      transition={{ duration: 0.6, ease: 'easeOut' }} // Smooth transition
    >
      <a href="/">Home</a>
      <a href="/create">Create Post</a>
      <a href="/guidelines">Guidelines</a>
    </motion.header>
  );
};

export default Header;
