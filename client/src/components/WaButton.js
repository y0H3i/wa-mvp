import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

const WaButton = ({ label, onClick }) => {
  return (
    <motion.button 
      className="wa-button"
      onClick={onClick}
      whileHover={{ scale: 1.1, backgroundColor: '#ffcb05' }} // Scale up and change color on hover
      whileTap={{ scale: 0.95 }} // Scale down slightly on click
      transition={{ duration: 0.2, ease: 'easeOut' }} // Smooth transition
    >
      {label}
    </motion.button>
  );
};

export default WaButton;
