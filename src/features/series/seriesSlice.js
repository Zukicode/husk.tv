import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { OPTIONS } from 'features/api/api';

export const fetchSliderSeriesItems = createAsyncThunk(
	'movie/fetchSliderSeriesItems',
	async () => {
		const response = await axios.get(
			`https://moviesdatabase.p.rapidapi.com/titles/?info=image&list=top_rated_250&limit=10`,
			OPTIONS
		);
		return [...response.data.results].reverse().sort(() => Math.random() - 0.5);
	}
);

export const fetchRecommendSeries = createAsyncThunk(
	'movie/fetchRecommendSeries',
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

export const fetchRateSeries = createAsyncThunk(
	'movie/fetchRateMovie',
	async () => {
		const response = await axios.get(
			`https://moviesdatabase.p.rapidapi.com/titles/?info=custom_info&list=top_rated_series_250&limit=50`,
			OPTIONS
		);
		return [...response.data.results]
			.filter(item => item.primaryImage)
			.sort(() => Math.random() - 0.5);
	}
);

export const fetchPopularSeries = createAsyncThunk(
	'movie/fetchPopularSeries',
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
	sliderSeriesItems: [],
	recommendSeries: [],
	ratingSeries: [],
	popularSeries: [],
	status: 'loading',
};

export const seriesSlice = createSlice({
	name: 'series',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchSliderSeriesItems.fulfilled, (state, { payload }) => {
			state.sliderSeriesItems = payload;
			state.status = 'success';
		});
		builder.addCase(fetchRecommendSeries.fulfilled, (state, { payload }) => {
			state.recommendSeries = payload;
			state.status = 'success';
		});
		builder.addCase(fetchPopularSeries.fulfilled, (state, { payload }) => {
			state.popularSeries = payload;
			state.status = 'success';
		});
		builder.addCase(fetchRateSeries.fulfilled, (state, { payload }) => {
			state.ratingSeries = payload;
			state.status = 'success';
		});
	},
});

export const {} = seriesSlice.actions;

export default seriesSlice.reducer;
