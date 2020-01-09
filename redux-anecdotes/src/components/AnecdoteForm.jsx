import React from 'react';
import { createNew } from '../reducers/anecdoteReducer.js';

const AnecdoteForm = ({ store }) => {

	const handleCreateNew = (event) => {
		event.preventDefault();
		const { value } = event.target.anecdote;
		store.dispatch(createNew(value));
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