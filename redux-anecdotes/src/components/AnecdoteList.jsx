import React from 'react';
import { addVote } from '../reducers/anecdoteReducer.js';

const AnecdoteForm = ({ store }) => {
	const { anecdotes, filter } = store.getState();

	const vote = (id) => {
		store.dispatch(addVote(id));
	};

	return (
		<>
			{anecdotes
				.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
				.map(anecdote =>
					<div key={anecdote.id}>
						<div>
							{anecdote.content}
						</div>
						<div>
							has {anecdote.votes}
							<button onClick={() => vote(anecdote.id)}>vote</button>
						</div>
					</div>
				)
			}
		</>
	);
};

export default AnecdoteForm;