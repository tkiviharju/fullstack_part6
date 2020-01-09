import React from 'react';

const Notification = ({ store }) => {
	const { notification } = store.getState();
	const style = {
		border: 'solid',
		padding: 10,
		borderWidth: 1,
		width: 'fit-content'
	};
	return (
		<>
			{notification &&
				<div style={style}>
					{notification}
				</div>}
		</>
	);
};

export default Notification;