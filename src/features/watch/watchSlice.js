import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { OPTIONS } from 'features/api/api';

export const fetchTitleById = createAsyncThunk(
	'watch/fetchTitleById',
	async id => {
		const response = await axios.get(
			`https://moviesdatabase.p.rapidapi.com/titles/${id}?info=custom_info`,
			OPTIONS
		);
		return {
			...response.data.results,
			embed: `https://v2.vidsrc.me/embed/${id}`,
		};
	}
);

const initialState = {
	item: {},
	status: null,
};

export const watchSlice = createSlice({
	name: 'watch',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchTitleById.fulfilled, (state, { payload }) => {
			state.item = payload;
			state.status = 'success';
		});
	},
});

export const {} = watchSlice.actions;

export default watchSlice.reducer;
