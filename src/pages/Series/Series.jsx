import { useEffect, useState } from 'react';

//Styles
import styles from './Series.module.scss';

//Components
import { BrowseMedia } from 'components/BrowseMedia';
import { Slider } from 'components/Slider';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchPopularSeries,
	fetchRateSeries,
	fetchRecommendSeries,
	fetchSliderSeriesItems,
} from 'features/series/seriesSlice';

//Other
import {
	SERIES_BEST_RATING,
	SERIES_POPULAR,
	SERIES_RECOMMEND,
	SERIES_ROUTE,
} from 'routes/routes';
import { Loader } from 'components/Loader';

const Series = () => {
	const dispatch = useDispatch();
	const {
		sliderSeriesItems,
		popularSeries,
		ratingSeries,
		recommendSeries,
		status,
	} = useSelector(state => state.series);

	useEffect(() => {
		dispatch(fetchSliderSeriesItems());
		dispatch(fetchPopularSeries());
		dispatch(fetchRecommendSeries());
		dispatch(fetchRateSeries());
	}, []);

	if (status !== 'success') {
		return (
			<div className={styles.loader}>
				<Loader />
			</div>
		);
	}

	return (
		<div className={styles.series}>
			<Slider sliderItems={sliderSeriesItems} />

			<div className={styles.films}>
				<div className={styles.bestRating}>
					<BrowseMedia
						path={SERIES_BEST_RATING}
						pathGlobal={SERIES_ROUTE}
						title='Best rating'
						mediasArr={ratingSeries}
					/>
				</div>

				<div className={styles.recommend}>
					<BrowseMedia
						path={SERIES_RECOMMEND}
						pathGlobal={SERIES_ROUTE}
						title='Recommend for you'
						mediasArr={recommendSeries}
					/>
				</div>

				<div className={styles.popular}>
					<BrowseMedia
						path={SERIES_POPULAR}
						pathGlobal={SERIES_ROUTE}
						title='Popular series'
						mediasArr={popularSeries}
					/>
				</div>
			</div>
		</div>
	);
};

export default Series;
