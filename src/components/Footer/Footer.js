import React from 'react';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';


const Footer = ({ count }) => (
	<footer className={styles.footer}>
		<div className={styles.counter}>
			На сегодня осталось выполнить дел: <span className={styles.count}>{count}</span>
		</div>
		<div className={styles.filters}>
			<div className={styles.filter_active}>
				Все дела
			</div>
			<div className={styles.filter}>
				Активные
			</div>
			<div className={styles.filter}>
				Выполненные
			</div>
		</div>
		<div className={styles.delete}>
			Удалить выбранные дела
		</div>
	</footer>
);

Footer.propTypes = {
	count: PropTypes.number.isRequired
};

export default Footer;