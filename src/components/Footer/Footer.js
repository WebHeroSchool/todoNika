import React from 'react';
import styles from './Footer.module.css';
import Typography from '@material-ui/core/Typography';

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

export default Footer;