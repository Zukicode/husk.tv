import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	moreItems: [],
};

export const moreSlice = createSlice({
	name: 'more',
	initialState,
	reducers: {
		setMoreItems: (state, { payload }) => {
			state.moreItems = payload;
		},
	},
});

export const { setMoreItems } = moreSlice.actions;

export default moreSlice.reducer;
