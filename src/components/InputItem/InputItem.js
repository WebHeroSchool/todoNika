import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
	state = {
		inputValue: ''
	};

	onButtonClick = () => {
		this.setState({
			inputValue: ''
		});

		if (this.state.inputValue) {
			this.props.onClickAdd(this.state.inputValue);
		}
		else {
			alert('Введите дело!!!!!!!');
		}
	}

	render() {
		const { onClickAdd } = this.props;

		return (
			<div className={styles.row}>
				<div className={styles.input}>
					<TextField 
						id="standard-secondary" 
						label="Что нужно сделать?" 
						color="secondary"
						value={this.state.inputValue}
						onChange={event => this.setState({inputValue: event.target.value.toUpperCase()})}
					/>
				</div>

				<Button
					variant='contained'
					onClick={this.onButtonClick}
				>
					Добавить
				</Button>
			</div>
		);
	}
}

export default InputItem;