import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: '',
	items: [],
};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		onChangeValue: (state, { payload }) => {
			state.value = payload;
		},
		setItems: (state, { payload }) => {
			state.items = payload;
		},
	},
});

export const { onChangeValue, setItems } = searchSlice.actions;

export default searchSlice.reducer;
