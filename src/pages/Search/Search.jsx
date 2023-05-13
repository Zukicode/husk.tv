import { useEffect, useState } from 'react';

//Styles
import styles from './Search.module.scss';

//Components
import { MediaItem } from 'components/MediaItem';

//Redux
import { useDispatch, useSelector } from 'react-redux';

//Icons
import { SearchIcon } from 'components/Icons/SearchIcon';
import { onChangeValue, setItems } from 'features/search/searchSlice';

//Other
import { useParams } from 'react-router-dom';
import { OPTIONS } from 'features/api/api';
import axios from 'axios';
import { Loader } from 'components/Loader';

const Search = () => {
	const { query } = useParams();

	const dispatch = useDispatch();
	const { items } = useSelector(state => state.search);

	const [currentPage, setCurrentPage] = useState(1);
	const [fetching, setFetching] = useState(true);

	useEffect(() => {
		dispatch(onChangeValue(query));
	}, []);

	useEffect(() => {
		if (fetching) {
			axios
				.get(
					`https://moviesdatabase.p.rapidapi.com/titles/search/title/${query}?info=custom_info&limit=21&page=${currentPage}`,
					OPTIONS
				)
				.then(response => {
					dispatch(
						setItems(
							[...items, ...response.data.results].filter(
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

	if (!items.length) {
		return (
			<div className={styles.Loader}>
				<Loader />
			</div>
		);
	}

	return (
		<div className={styles.Search}>
			<div className={styles.title}>
				<SearchIcon />
				<span>|</span>
				<h1>Result</h1>
			</div>

			<div className={styles.content}>
				{items.map(item => (
					<MediaItem key={item.id} path={'/title'} {...item} />
				))}
			</div>

			<Loader />
		</div>
	);
};

export default Search;
