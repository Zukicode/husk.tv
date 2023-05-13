import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { OPTIONS } from 'features/api/api';

export const fetchSliderItems = createAsyncThunk(
	'home/fetchSliderItems',
	async () => {
		const response = await axios.get(
			`https://moviesdatabase.p.rapidapi.com/titles/?info=image&list=top_rated_250&limit=10`,
			OPTIONS
		);
		return [...response.data.results].reverse().sort(() => Math.random() - 0.5);
	}
);

export const fetchFourMoive = createAsyncThunk(
	'home/fetchFourMoive',
	async () => {
		const response = await axios.get(
			`https://moviesdatabase.p.rapidapi.com/titles/?info=custom_info&list=top_rated_250&limit=50`,
			OPTIONS
		);
		return [...response.data.results]
			.filter(item => item.primaryImage)
			.sort(() => Math.random() - 0.5);
	}
);

export const fetchFourSeries = createAsyncThunk(
	'home/fetchFourSeries',
	async () => {
		const response = await axios.get(
			`https://moviesdatabase.p.rapidapi.com/titles/?info=custom_info&list=most_pop_series&limit=50`,
			OPTIONS
		);
		return [...response.data.results]
			.filter(item => item.primaryImage)
			.sort(() => Math.random() - 0.5);
	}
);

const initialState = {
	sliderItems: [],
	fourMovie: [],
	fourSeries: [],
	status: null,
};

export const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchSliderItems.fulfilled, (state, { payload }) => {
			state.sliderItems = payload;
			state.status = 'success';
		});
		builder.addCase(fetchFourMoive.fulfilled, (state, { payload }) => {
			state.fourMovie = payload;
			state.status = 'success';
		});
		builder.addCase(fetchFourSeries.fulfilled, (state, { payload }) => {
			state.fourSeries = payload;
			state.status = 'success';
		});
	},
});

export const {} = homeSlice.actions;

export default homeSlice.reducer;
