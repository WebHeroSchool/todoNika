import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone }) => (
	<div className={styles.list}>
		{items.map(item => 
			<div key={item.value}>
				<Item value = {item.value} isDone={item.isDone} onClickDone={onClickDone}/>
			</div> )
		}
	</div>
);

export default ItemList;