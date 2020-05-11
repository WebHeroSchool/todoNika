import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const todoItem = 'Написать новое приложение';

const App = () => {
	const items = [
		{
			value: 'Написать новое приложение'
		},
		{
			value:'второе важное дело'
		},
		{
			value:'третье важное дело'
		}
	];

	return (
		<div>
			<h1>Hey</h1>
			<InputItem/>
			<ItemList items={items}/>
			<Footer count={666} />
		</div>
	);
}

export default App;