import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const todoItem = 'Написать новое приложение';
const App = () => (
	<div>
		<h1>Hey</h1>
		<InputItem/>
		<ItemList todoItem={todoItem}/>
		<Footer count={666} />
	</div>
);

export default App;