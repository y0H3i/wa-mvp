import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

const PostCard = ({ title, content }) => {
  return (
    <motion.div 
      className="post-card"
      initial={{ opacity: 0, scale: 0.9 }} // Start with lower opacity and smaller size
      animate={{ opacity: 1, scale: 1 }}   // Animate to full size and opacity
      whileHover={{ scale: 1.05 }}         // Slightly enlarge on hover
      transition={{ duration: 0.5, ease: 'easeOut' }} // Smooth transition
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </motion.div>
  );
};

export default PostCard;
