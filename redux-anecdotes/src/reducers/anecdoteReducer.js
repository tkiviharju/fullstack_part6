export const asObject = (anecdote) => {
	return {
		content: anecdote,
		votes: 0
	};
};


const sortByVotes = (anecdote1, anecdote2) => (
	anecdote2.votes - anecdote1.votes
);

export const addVote = (id) => ({
	type: 'INCREMENT_VOTE',
	data: { id }
});

export const createNew = (anecdote) => ({
	type: 'NEW_ANECDOTE',
	data: anecdote
});

export const initializeAnecdotes = (notes) => ({
	type: 'INIT_ANECDOTES',
	data: notes,
});

const reducer = (state = [], action) => {
	console.log('state now: ', state);
	console.log('action', action);
	const { type, data } = action;

	if (type === 'INCREMENT_VOTE'){
		return state.map(anecdote => (
			anecdote.id === data.id ?
				{
					content: anecdote.content,
					id: anecdote.id,
					votes: anecdote.votes + 1
				}
				:
				anecdote
		)).sort(sortByVotes);

	} else if (type === 'NEW_ANECDOTE'){
		return state.concat(data).sort(sortByVotes);

	} else if (type === 'INIT_ANECDOTES'){
		return data.sort(sortByVotes);
	}
	return state;
};

export default reducer;