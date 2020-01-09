import React from 'react';
import { applyFilter } from '../reducers/filterReducer.js';

const Filter = ({ store }) => {

	const handleChange = (event) => {
		const { value } = event.target;
		store.dispatch(applyFilter(value));
	};

	const style = {
		marginBottom: 10
	};

	return (
		<div style={style}>
			filter <input onChange={handleChange} />
		</div>
	);
};

export default Filter;