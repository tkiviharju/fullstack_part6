import React from 'react';

import { addVote, createNew } from './reducers/anecdoteReducer.js';

const App = (props) => {
	const anecdotes = props.store.getState();

	const vote = (id) => {
		props.store.dispatch(addVote(id));
	};

	const handleCreateNew = (event) => {
		event.preventDefault();
		const { value } = event.target.anecdote;
		props.store.dispatch(createNew(value));
	};

	return (
		<div>
			<h2>Anecdotes</h2>
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
			<h2>create new</h2>
			<form onSubmit={handleCreateNew}>
				<div><input name='anecdote'/></div>
				<button type='submit'>create</button>
			</form>
		</div>
	);
};

export default App;