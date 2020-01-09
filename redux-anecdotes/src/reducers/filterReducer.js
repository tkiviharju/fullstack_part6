
export const applyFilter = (filter) => ({
	type: 'APPLY_FILTER',
	data: filter
});

const initialState = '';
const reducer = (state = initialState, action) => {
	const { type, data } = action;
	if (type === 'APPLY_FILTER'){
		return data;
	}

	return state;
};

export default reducer;