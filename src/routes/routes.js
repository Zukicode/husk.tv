//Pages
import Auth from 'pages/Auth/Auth';
import Home from 'pages/Home/Home';
import MediaList from 'pages/MediaList/MediaList';
import Movie from 'pages/Movie/Movie';
import MyCollection from 'pages/MyCollection/MyCollection';
import NotFound from 'pages/NotFound/NotFound';
import Search from 'pages/Search/Search';
import Series from 'pages/Series/Series';
import Watch from 'pages/Watch/Watch';

//Route
export const HOME_ROUTE = '/';

export const MOVIE_ROUTE = '/movie';
export const MOVIE_MORE = '/movie/:type';
export const MOVIE_RECOMMEND = '/movie/recommend';
export const MOVIE_POPULAR = '/movie/popular';
export const MOVIE_BEST_RATING = '/movie/rating';

export const SERIES_ROUTE = '/series';
export const SERIES_MORE = '/series/:type';
export const SERIES_RECOMMEND = '/series/recommend';
export const SERIES_POPULAR = '/series/popular';
export const SERIES_BEST_RATING = '/series/rating';

export const NOTFOUND_ROUTE = '*';

export const SEARCH_ROUTE = '/search/:query';
export const SEARCH_WATCH = '/title/:id';

export const AUTH_ROUTE = '/auth';
export const COLLECTION_ROUTE = '/collection';

//Array Route
export const publicRoutes = [
	{
		path: HOME_ROUTE,
		element: <Home />,
	},
	/* MOVIE */
	{
		path: MOVIE_ROUTE,
		element: <Movie />,
	},

	{
		path: MOVIE_MORE,
		element: <MediaList />,
	},
	/* MOVIE */

	/* SERIES */
	{
		path: SERIES_ROUTE,
		element: <Series />,
	},
	{
		path: SERIES_MORE,
		element: <MediaList />,
	},
	/* SERIES */
	{
		path: NOTFOUND_ROUTE,
		element: <NotFound />,
	},
	{
		path: AUTH_ROUTE,
		element: <Auth />,
	},
	{
		path: SEARCH_ROUTE,
		element: <Search />,
	},
	{
		path: SEARCH_WATCH,
		element: <Watch />,
	},
];

//Array Route
export const privateRoutes = [
	{
		path: COLLECTION_ROUTE,
		element: <MyCollection />,
	},
];
