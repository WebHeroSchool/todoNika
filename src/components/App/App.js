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
		]
	};

	onClickDone = isDone => console.log(isDone);

	render() {
		return (
			<div className={styles.wrap}>
				<div className={styles.title}>Ты можешь все!</div>
				<InputItem/>
				<ItemList items={this.state.items} onClickDone={this.onClickDone}/>
				<Footer count={1}/>
			</div>
		);
	}
};

export default App;