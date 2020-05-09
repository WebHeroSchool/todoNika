import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => 
	(
		<ul>
			<li><Item todoItem = {todoItem}/></li>
			<li><Item todoItem = {'второе важное дело'}/></li>
			<li><Item todoItem = {'третье важное дело'}/></li>
		</ul>
);

export default ItemList;