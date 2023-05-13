import {
	MOVIE_BEST_RATING,
	MOVIE_POPULAR,
	MOVIE_RECOMMEND,
	MOVIE_ROUTE,
	SERIES_BEST_RATING,
	SERIES_POPULAR,
	SERIES_RECOMMEND,
	SERIES_ROUTE,
} from 'routes/routes';

//Funciton for title in MediaList Component
export const generateTitle = path => {
	if (path.includes(MOVIE_ROUTE)) {
		switch (path) {
			case MOVIE_POPULAR:
				return 'Top movie';
			case MOVIE_RECOMMEND:
				return 'Movie for you';
			case MOVIE_BEST_RATING:
				return 'Best movie';

			default:
				break;
		}
	} else if (path.includes(SERIES_ROUTE)) {
		switch (path) {
			case SERIES_POPULAR:
				return 'Top series';
			case SERIES_RECOMMEND:
				return 'Recommend series';
			case SERIES_BEST_RATING:
				return 'Best series';

			default:
				break;
		}
	}
};

export const getTypeRequest = (path, type) => {
	if (path.includes('/movie')) {
		switch (type) {
			case 'recommend':
				return 'most_pop_movies';
			case 'popular':
				return 'most_pop_movies';
			case 'rating':
				return 'top_rated_250';

			default:
				break;
		}
	}

	if (path.includes('/series')) {
		switch (type) {
			case 'recommend':
				return 'most_pop_series';
			case 'popular':
				return 'most_pop_series';
			case 'rating':
				return 'top_rated_series_250';

			default:
				break;
		}
	}
};

//format vote number
export function formatNumber(number) {
	const suffixes = ['', 'k', 'm', 'b', 't'];
	const suffixNum = Math.floor(('' + number).length / 3);
	let shortNum = parseFloat(
		(suffixNum !== 0 ? number / Math.pow(1000, suffixNum) : number).toPrecision(
			3
		)
	);
	if (shortNum % 1 !== 0) {
		shortNum = shortNum.toFixed(1);
	}
	return shortNum + suffixes[suffixNum];
}

//in massive or not for button in watch page
export function inArray(arr, id) {
	if (arr.find(item => item.id === id)) return true;
	return false;
}
