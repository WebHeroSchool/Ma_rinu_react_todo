import React from 'react';
import styles from'./Footer.module.css';

const Footer = ({ count }) => (<div className={styles.text}>Осталось выполнить вот столько дел: {count}</div>);

export default Footer;
