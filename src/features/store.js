import { configureStore } from '@reduxjs/toolkit';

//Slices
import searchSlice from './search/searchSlice';
import userSlice from './user/userSlice';
import homeSlice from './home/homeSlice';
import movieSlice from './movie/movieSlice';
import seriesSlice from './series/seriesSlice';
import watchSlice from './watch/watchSlice';
import moreSlice from './more/moreSlice';
import collectionSlice from './collection/collectionSlice';

export const store = configureStore({
	reducer: {
		user: userSlice,
		search: searchSlice,
		home: homeSlice,
		movie: movieSlice,
		series: seriesSlice,
		watch: watchSlice,
		more: moreSlice,
		collection: collectionSlice,
	},
});
