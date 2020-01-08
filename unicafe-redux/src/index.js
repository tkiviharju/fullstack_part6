import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

const App = () => {

	const handleClick = (event) => {
		const { name } = event.target;
		store.dispatch({
			type: name
		});
	};

	return (
		<div>
			<button name='GOOD' onClick={handleClick}>hyvä</button>
			<button name='OK' onClick={handleClick}>neutraali</button>
			<button name='BAD' onClick={handleClick}>huono</button>
			<button name='ZERO' onClick={handleClick}>nollaa tilastot</button>
			<div>hyvä {store.getState().good}</div>
			<div>neutraali {store.getState().ok} </div>
			<div>huono {store.getState().bad}</div>
		</div>
	);
};

const renderApp = () => {
	ReactDOM.render(<App />, document.getElementById('root'));
};

renderApp();
store.subscribe(renderApp);
