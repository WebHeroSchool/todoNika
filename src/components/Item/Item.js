import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import DeleteIcon from '@material-ui/icons/Delete';

const Item = ({ value, isDone }) => (
	<div className={
		classnames({
			[styles.item]: true,
			[styles.done]: isDone
		})
	}>
	{value}
	<span className={styles.icon}>
		<DeleteIcon/>
	</span>
</div>);



export default Item;