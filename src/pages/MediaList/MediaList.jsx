import { useEffect, useState } from 'react';

//Styles
import styles from './MediaList.module.scss';

//Icons
import { MovieIcon } from 'components/Icons/MovieIcon';

//Components
import { MediaItem } from 'components/MediaItem';

//Route
import { useLocation, useParams } from 'react-router-dom';

//Other
import { generateTitle, getTypeRequest } from 'utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'components/Loader';
import { setMoreItems } from 'features/more/moreSlice';
import axios from 'axios';
import { OPTIONS } from 'features/api/api';

const MediaList = () => {
	const { pathname } = useLocation();
	const { type } = useParams();

	const dispatch = useDispatch();
	const { moreItems } = useSelector(state => state.more);

	const [title, setTitle] = useState('Not Movie');
	const [path, setPath] = useState('');

	const [currentPage, setCurrentPage] = useState(1);
	const [fetching, setFetching] = useState(true);

	useEffect(() => {
		if (fetching) {
			axios
				.get(
					`https://moviesdatabase.p.rapidapi.com/titles/?info=custom_info&list=${getTypeRequest(
						pathname,
						type
					)}&limit=20&page=${currentPage}`,
					OPTIONS
				)
				.then(response => {
					dispatch(
						setMoreItems(
							[...moreItems, ...response.data.results].filter(
								item => item.primaryImage
							)
						)
					);
					setCurrentPage(prev => prev + 1);
				})
				.finally(() => setFetching(false));
		}
	}, [fetching]);

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler);

		return function () {
			document.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	const scrollHandler = e => {
		if (
			e.target.documentElement.scrollHeight -
				(e.target.documentElement.scrollTop + window.innerHeight) <
			100
		) {
			setFetching(true);
		}
	};

	useEffect(() => {
		if (pathname.includes('movie')) {
			setPath('/movie');
		} else if (pathname.includes('series')) {
			setPath('/series');
		} else {
			setPath('/');
		}
		setTitle(generateTitle(pathname));
	}, [pathname]);

	if (!moreItems.length) {
		return (
			<div className={styles.Loader}>
				<Loader />
			</div>
		);
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<MovieIcon />
				<span>|</span>
				<h1>{title}</h1>
			</div>

			<div className={styles.movies}>
				{moreItems.map(movie => (
					<MediaItem path={path} key={movie.id} {...movie} />
				))}
			</div>
			<Loader />
		</div>
	);
};

export default MediaList;
