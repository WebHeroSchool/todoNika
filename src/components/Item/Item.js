import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

class Item extends React.Component {
	// componentDidMount() {
	// 	const { id } = this.props;
	// 	this.timerID = setInterval(() => console.log('память утекает, задействован элемент ' + id), 1000);
	// }

	// componentWillUnmount() {
	// 	clearInterval(this.timerID);
	// }

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