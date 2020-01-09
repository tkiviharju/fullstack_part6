import React from 'react';
import { createNew } from '../reducers/anecdoteReducer.js';
import { createNotification, removeNotification } from '../reducers/notificationReducer.js';

const AnecdoteForm = ({ store }) => {

	const handleCreateNew = (event) => {
		event.preventDefault();
		const { value } = event.target.anecdote;
		store.dispatch(createNew(value));
		const notification = `Anecdote ${value} added`;
		store.dispatch(createNotification(notification));
		setTimeout(() => store.dispatch(removeNotification()), 5000);
		event.target.anecdote.value = '';
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

export default AnecdoteForm;