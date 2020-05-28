import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo=() => {
	const initialState = {
		items: [
			{
				value: 'Написать новое приложение',
				isDone: true,
				id: 1
			},
			{
				value:'второе важное дело',
				isDone: false,
				id: 2
			},
			{
				value:'третье важное дело',
				isDone: true,
				id: 3
			}
		],
		count: 3
	};

	const [todoItem, setTodoItem] = useState(initialState.items);
	const [count, setCount] = useState(initialState.count);

	useEffect(() => {
		console.log('update');
	});

	useEffect(() => {
		console.log('mount');
	}, []);
	
	const onClickDone = id => {
		const newItemList = todoItem.map(item => {
			const newItem = {...item};

			if (item.id === id) {
				newItem.isDone = !newItem.isDone;
			}

			return newItem;
		});

		setTodoItem(newItemList);
	};

	const onClickDelete = id => {
		const newItemList = todoItem.filter(item => item.id !== id);

	    setTodoItem(newItemList);
	    setCount((count) => count - 1);
	};

	const onClickAdd = value => {
		const newTodoItem = [
			...todoItem,
			{
				value,
				id: count + 1
			}
		];
		setTodoItem(newTodoItem);
	    setCount((count) => count + 1);
	};

	return (
		<div className={styles.wrap}>
			<div className={styles.title}>Ты можешь все!</div>
			<InputItem onClickAdd={onClickAdd}/>
			<ItemList 
				items={todoItem} 
				onClickDone={onClickDone} 
				onClickDelete={onClickDelete}
			/>
			<Footer count={count}/>
		</div>
	);
};

export default Todo;