import React from 'react';
import { connect } from 'react-redux';
import { createNew } from '../reducers/anecdoteReducer.js';
import { createNotification, removeNotification } from '../reducers/notificationReducer.js';
import anecdoteService from '../services/anecdoteService.js';

const AnecdoteForm = (props) => {

	const handleCreateNew = async (event) => {
		event.preventDefault();
		const { value } = event.target.anecdote;
		event.target.anecdote.value = '';
		const newAnecdote = await anecdoteService.createNew(value);
		props.dispatchCreateNew(newAnecdote);
		const notification = `Anecdote ${value} added`;
		props.dispatchCreateNotification(notification);
		setTimeout(() => props.dispatchRemoveNotification(), 5000);
	};

	return (
		<>
			<h2>create new</h2>
			<form onSubmit={handleCreateNew}>
				<div><input name='anecdote'/></div>
				<button type='submit'>create</button>
			</form>
		</>
	);
};


const mapDispatchToProps = (dispatch) => ({
	dispatchCreateNotification: value => dispatch(createNotification(value)),
	dispatchRemoveNotification: () => dispatch(removeNotification()),
	dispatchCreateNew: anecdote => dispatch(createNew(anecdote))
});

export default connect(null, mapDispatchToProps)(AnecdoteForm);