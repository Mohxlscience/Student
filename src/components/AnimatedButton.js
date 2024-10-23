import { motion } from 'framer-motion';

const AnimatedButton = ({ text, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: '#ff4081' }} // Animation au survol
      whileTap={{ scale: 0.9, backgroundColor: '#ff1744' }}    // Animation au clic
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '8px',
        border: 'none',
        color: '#fff',
        backgroundColor: '#007bff',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default AnimatedButton;
