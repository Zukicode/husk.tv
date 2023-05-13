import { useEffect, useState } from 'react';

//Styles
import styles from './Home.module.scss';

//Components
import { BrowseMedia } from 'components/BrowseMedia';
import { Slider } from 'components/Slider';

//temp
import { MOVIE_ROUTE, SERIES_ROUTE } from 'routes/routes';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchFourMoive,
	fetchFourSeries,
	fetchSliderItems,
} from 'features/home/homeSlice';
import { Loader } from 'components/Loader';

const Home = () => {
	const dispatch = useDispatch();
	const { sliderItems, fourMovie, fourSeries, status } = useSelector(
		state => state.home
	);

	//Slider
	useEffect(() => {
		dispatch(fetchSliderItems());
		dispatch(fetchFourMoive());
		dispatch(fetchFourSeries());
	}, []);

	if (status !== 'success') {
		return (
			<div className={styles.loader}>
				<Loader />
			</div>
		);
	}

	return (
		<div className={styles.home}>
			<Slider sliderItems={sliderItems} />

			<div className={styles.media}>
				<BrowseMedia
					path={MOVIE_ROUTE}
					title='Movie for you'
					mediasArr={fourMovie}
				/>

				<BrowseMedia
					path={SERIES_ROUTE}
					title='Good series'
					mediasArr={fourSeries}
				/>
			</div>
		</div>
	);
};

export default Home;
