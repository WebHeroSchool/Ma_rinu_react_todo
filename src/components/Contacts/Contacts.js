import React from 'react';
import styles from './Contacts.module.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contacts = () => {
	return (
		<div className={styles.wrap}>
			<h1 className={styles.title}>Контакты</h1>
			<div className={styles.contacts}>
			  <div className={styles.phone}>
				  <PhoneIphoneOutlinedIcon className={styles.icon}
					  color="primary"
						fontSize="large" />+7 (921) 364-29-54</div>
			  <a href="mailto:mmmarinammm@gmail.com" className={styles.mail}>
				  <MailOutlineIcon className={styles.icon}
					  color="primary"
						fontSize="large" />mmmarinammm@gmail.com</a>
        <a href="https://instagram.com/ma_rinu" className={styles.insta}>
          <InstagramIcon
					  color="primary"
						fontSize="large" /></a>
        <a href="https://github.com/MarinaMix" className={styles.github}>
          <GitHubIcon
					  color="primary"
						fontSize="large"/></a>
			</div>
		</div>
	);
}

export default Contacts;
