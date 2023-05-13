import { useEffect } from 'react';

//Styles
import styles from './Movie.module.scss';

//Components
import { BrowseMedia } from 'components/BrowseMedia';
import { Slider } from 'components/Slider';
import { Loader } from 'components/Loader';

//Redux
import { useDispatch, useSelector } from 'react-redux';

//Other
import {
	MOVIE_BEST_RATING,
	MOVIE_POPULAR,
	MOVIE_RECOMMEND,
} from 'routes/routes';

//Redux
import {
	fetchPopularMovie,
	fetchRateMovie,
	fetchRecommendMovie,
	fetchSliderMovieItems,
} from 'features/movie/movieSlice';

const Movie = () => {
	const dispatch = useDispatch();

	const {
		sliderMovieItems,
		popularMovie,
		ratingMovie,
		recommendMovie,
		status,
	} = useSelector(state => state.movie);

	useEffect(() => {
		dispatch(fetchSliderMovieItems());
		dispatch(fetchPopularMovie());
		dispatch(fetchRecommendMovie());
		dispatch(fetchRateMovie());
	}, []);

	if (status !== 'success') {
		return (
			<div className={styles.loader}>
				<Loader />
			</div>
		);
	}

	return (
		<div className={styles.movie}>
			<Slider sliderItems={sliderMovieItems} />

			<div className={styles.films}>
				<div className={styles.recommend}>
					<BrowseMedia
						path={MOVIE_RECOMMEND}
						title='Recommend for you'
						mediasArr={recommendMovie}
					/>
				</div>

				<div className={styles.popular}>
					<BrowseMedia
						path={MOVIE_POPULAR}
						title='Popular movie'
						mediasArr={popularMovie}
					/>
				</div>

				<div className={styles.bestRating}>
					<BrowseMedia
						path={MOVIE_BEST_RATING}
						title='Best rating'
						mediasArr={ratingMovie}
					/>
				</div>
			</div>
		</div>
	);
};

export default Movie;
