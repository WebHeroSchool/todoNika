import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

class Item extends React.Component {
	componentDidMount() {
		console.log('componentDidMount');
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	render() {
		const { value, isDone, onClickDone, id, onClickDelete } = this.props;
		return (
			<div className={
					classnames({
						[styles.item]: true,
						[styles.done]: isDone
					})
				}>

				<Checkbox
					checked={isDone}
					tabIndex={-1}
					onClick={() => onClickDone(id)}
				/>

				{value}
				<span className={styles.icon}>
					<DeleteIcon onClick={() => onClickDelete(id)}/>
				</span>
			</div>
		);
	}
}

Item.defaultProps = {
	isDone: false
};

Item.propTypes = {
	count: PropTypes.bool
};

export default Item;