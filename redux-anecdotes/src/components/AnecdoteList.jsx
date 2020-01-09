import React from 'react';
import { addVote } from '../reducers/anecdoteReducer.js';

const AnecdoteForm = ({ store }) => {
	const anecdotes = store.getState();

	const vote = (id) => {
		store.dispatch(addVote(id));
	};

	return (
		<>
			{anecdotes.map(anecdote =>
				<div key={anecdote.id}>
					<div>
						{anecdote.content}
					</div>
					<div>
			has {anecdote.votes}
						<button onClick={() => vote(anecdote.id)}>vote</button>
					</div>
				</div>
			)}
		</>
	);
};

export default AnecdoteForm;