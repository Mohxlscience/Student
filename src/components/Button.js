import React from 'react';
import styles from '../styles/Button.module.css'; // Importation des styles

const Button = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
