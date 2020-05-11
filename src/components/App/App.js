import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import './App.css';

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
		<div className="wrap">
			<div className="wrap__title">Дневник эффективности</div>
			<InputItem/>
			<ItemList items={items}/>
			<Footer count={666} />
		</div>
	);
}

export default App;