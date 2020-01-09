import React from 'react';
import { connect } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer.js';

const AnecdoteList = ({ anecdotes, filter, dispatchAddVote }) => {

	const vote = (id) => {
		dispatchAddVote(id);
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

const mapStateToProps = (state) => ({
	filter: state.filter,
	anecdotes: state.anecdotes,
});

const mapDispatchToProps = (dispatch) => ({
	dispatchAddVote: id => dispatch(addVote(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);