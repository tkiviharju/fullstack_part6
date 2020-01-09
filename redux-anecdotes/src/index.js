import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import App from './App';
import anecdoteReducer from './reducers/anecdoteReducer.js';
import notificationReducer from './reducers/notificationReducer.js';
import filterReducer from './reducers/filterReducer.js';

const reducer = combineReducers({
	anecdotes: anecdoteReducer,
	notification: notificationReducer,
	filter: filterReducer
});

const store = createStore(reducer);
const render = () => {
	ReactDOM.render(
		<App store={store} />,
		document.getElementById('root')
	);
};

render();
store.subscribe(render);