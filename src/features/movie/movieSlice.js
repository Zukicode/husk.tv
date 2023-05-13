import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { OPTIONS } from 'features/api/api';
import { getTypeRequest } from 'utils/utils';

export const fetchSliderMovieItems = createAsyncThunk(
	'movie/fetchSliderMovieItems',
	async () => {
		const response = await axios.get(
			`https://moviesdatabase.p.rapidapi.com/titles/?info=image&list=top_rated_250&limit=10`,
			OPTIONS
		);
		return [...response.data.results].reverse().sort(() => Math.random() - 0.5);
	}
);

export const fetchRecommendMovie = createAsyncThunk(
	'movie/fetchRecommendMovie',
	async () => {
		const response = await axios.get(
			`https://moviesdatabase.p.rapidapi.com/titles/?info=custom_info&list=most_pop_movies&limit=50`,
			OPTIONS
		);
		return [...response.data.results]
			.filter(item => item.primaryImage)
			.sort(() => Math.random() - 0.5);
	}
);

export const fetchRateMovie = createAsyncThunk(
	'movie/fetchRateMovie',
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

export const fetchPopularMovie = createAsyncThunk(
	'movie/fetchPopularMovie',
	async () => {
		const response = await axios.get(
			`https://moviesdatabase.p.rapidapi.com/titles/?info=custom_info&list=most_pop_movies&limit=50`,
			OPTIONS
		);
		return [...response.data.results]
			.filter(item => item.primaryImage)
			.sort(() => Math.random() - 0.5);
	}
);

export const fetchMoreMovieByType = createAsyncThunk(
	'movie/fetchMoreMovieByType',
	async ({ path, type }) => {
		const response = await axios.get(
			`https://moviesdatabase.p.rapidapi.com/titles/?info=custom_info&list=${getTypeRequest(
				{ path, type }
			)}&limit=50`,
			OPTIONS
		);
		return [...response.data.results]
			.filter(item => item.primaryImage)
			.sort(() => Math.random() - 0.5);
	}
);

const initialState = {
	sliderMovieItems: [],
	recommendMovie: [],
	ratingMovie: [],
	popularMovie: [],
	movieMore: [],
	status: null,
	statusMore: null,
};

export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchSliderMovieItems.fulfilled, (state, { payload }) => {
			state.sliderMovieItems = payload;
			state.status = 'success';
		});
		builder.addCase(fetchRecommendMovie.fulfilled, (state, { payload }) => {
			state.recommendMovie = payload;
			state.status = 'success';
		});
		builder.addCase(fetchPopularMovie.fulfilled, (state, { payload }) => {
			state.popularMovie = payload;
			state.status = 'success';
		});
		builder.addCase(fetchRateMovie.fulfilled, (state, { payload }) => {
			state.ratingMovie = payload;
			state.status = 'success';
		});
		builder.addCase(fetchMoreMovieByType.fulfilled, (state, { payload }) => {
			state.movieMore = payload;
			state.statusMore = 'success';
		});
	},
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
