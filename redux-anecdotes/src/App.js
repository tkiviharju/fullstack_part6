import React from 'react';

import AnecdoteForm from './components/AnecdoteForm.jsx';
import AnecdoteList from './components/AnecdoteList.jsx';

const App = ({ store }) => {

	return (
		<div>
			<h2>Anecdotes</h2>
			<AnecdoteList store={store} />
			<AnecdoteForm store={store} />
		</div>
	);
};

export default App;