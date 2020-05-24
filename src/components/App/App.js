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

	onClickDelete = id => {
		const newItemList = this.state.items.filter(item => item.id !== id);

	    this.setState({items: newItemList});
	};

	onClickAdd = value => this.setState(state => ({
		items: [
			...state.items,
			{
				value,
				id: state.count + 1
			}
		],
		count: state.count + 1
	}));

	render() {
		return (
			<div className={styles.wrap}>
				<div className={styles.title}>Ты можешь все!</div>
				<InputItem onClickAdd={this.onClickAdd}/>
				<ItemList 
					items={this.state.items} 
					onClickDone={this.onClickDone} 
					onClickDelete={this.onClickDelete}
				/>
				<Footer/>
			</div>
		);
	}
};

export default App;