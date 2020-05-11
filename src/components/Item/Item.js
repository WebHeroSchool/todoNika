import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';

const Item = ({ value, isDone }) => (
	<div className={
		classnames({
			[styles.item]: true,
			[styles.done]: isDone
		})
	}>
	{value}
</div>);

export default Item;