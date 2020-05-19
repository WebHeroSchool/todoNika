import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const todoItem = 'Написать новое приложение';

const App = () => {
	const items = [
		{
			value: 'Написать новое приложение',
			isDone: true
		},
		{
			value:'второе важное дело',
			isDone: false
		},
		{
			value:'третье важное дело',
			isDone: true
		}
	];

	return (
		<div className={styles.wrap}>
			<div className={styles.title}>Ты можешь все!</div>
			<InputItem/>
			<ItemList items={items}/>
			<Footer count={1}/>
		</div>
	);
}

export default App;