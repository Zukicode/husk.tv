import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	collectionList: [],
};

export const collectionSlice = createSlice({
	name: 'collection',
	initialState,
	reducers: {
		setCollectionList: (state, { payload }) => {
			state.collectionList = payload;
			localStorage.setItem('collection', JSON.stringify(state.collectionList));
		},
		addToCollection: (state, { payload }) => {
			if (state.collectionList.find(item => item.id === payload.id)) return;
			state.collectionList = [...state.collectionList, payload];

			localStorage.setItem('collection', JSON.stringify(state.collectionList));
		},
		removeFromCollection: (state, { payload }) => {
			state.collectionList = state.collectionList.filter(
				collection => collection.id !== payload
			);
			localStorage.setItem('collection', JSON.stringify(state.collectionList));
		},
	},
});

export const { setCollectionList, addToCollection, removeFromCollection } =
	collectionSlice.actions;

export default collectionSlice.reducer;
