import React from 'react';
import styles from'./Footer.module.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const Footer = ({ count, itemActive, itemDone, onClickFilter }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.button}>
       <div onClick={() => onClickFilter('all')}>
          <Button className={styles.btn}
            variant="contained"
            color="primary"
            size="small">Все задачи</Button>
        </div>
        <div onClick={() => onClickFilter('done')}>
          <Button className={styles.btn}
            variant="contained"
            color="primary"
            size="small">Активные</Button>
        </div>
        <div onClick={() => onClickFilter('active')}>
        <Button
          variant="contained"
          color="primary"
          size="small">Выполненные</Button>
        </div>
      </div>
      <p className={styles.text}>Осталось выполнить дел: {count}</p>
  </div>)
}


Footer.defaultProps = {
  count: 0
};

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;
