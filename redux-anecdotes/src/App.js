import React from 'react';

import AnecdoteForm from './components/AnecdoteForm.jsx';
import AnecdoteList from './components/AnecdoteList.jsx';
import Notification from './components/Notification';

const App = ({ store }) => {

	return (
		<div>
			<h2>Anecdotes</h2>
			<Notification store={store} />
			<AnecdoteList store={store} />
			<AnecdoteForm store={store} />
		</div>
	);
};

export default App;