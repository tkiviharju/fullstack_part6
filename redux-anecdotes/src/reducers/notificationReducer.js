
export const createNotification = (notification) => ({
	type: 'CREATE_NOTIFICATION',
	data: notification
});

export const removeNotification = () => ({
	type: 'REMOVE_NOTIFICATION',
	data: null
});

const initialState = '';
const reducer = (state = initialState, action) => {
	const { type, data } = action;
	if (type === 'CREATE_NOTIFICATION'){
		return data;
	} else if (type === 'REMOVE_NOTIFICATION'){
		return initialState;
	}
	return state;
};

export default reducer;