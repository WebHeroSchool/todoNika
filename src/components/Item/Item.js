import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({ value, isDone, onClickDone }) => (
	<div className={
		classnames({
			[styles.item]: true,
			[styles.done]: isDone
		})
	}>

	<Checkbox
		checked={isDone}
		tabIndex={-1}
		onClick={() => onClickDone(isDone)}
	/>

	{value}
	<span className={styles.icon}>
		<DeleteIcon/>
	</span>
</div>);



export default Item;