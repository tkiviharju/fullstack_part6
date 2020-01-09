import React from 'react';
import { connect } from 'react-redux';
import { applyFilter } from '../reducers/filterReducer.js';

const Filter = (props) => {

	const handleChange = (event) => {
		const { value } = event.target;
		props.dispatchApplyFilter(value);
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

const mapDispatchToProps = (dispatch) => ({
	dispatchApplyFilter: filter => dispatch(applyFilter(filter))
});

export default connect(null, mapDispatchToProps)(Filter);