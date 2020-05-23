import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
	state = {
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
		count: 6
	};

	onClickDone = id => {
		const newItemList = this.state.items.map(item => {
			const newItem = {...item};

			if (item.id === id) {
				newItem.isDone = !newItem.isDone;
			}

			return newItem;
		});

		this.setState({ items: newItemList });
	};

	render() {
		return (
			<div className={styles.wrap}>
				<div className={styles.title}>Ты можешь все!</div>
				<InputItem/>
				<ItemList items={this.state.items} onClickDone={this.onClickDone}/>
				<Footer count={this.state.count}/>
			</div>
		);
	}
};

export default App;