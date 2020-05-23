import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete }) => (
	<div className={styles.list}>
		{items.map(item => 
			<div key={item.value}>
				<Item 
					value = {item.value} 
					isDone={item.isDone} 
					id={item.id} 
					onClickDone={onClickDone}
					onClickDelete={onClickDelete}
				/>
			</div>)
		}
	</div>
);

export default ItemList;