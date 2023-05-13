//Styles
import styles from './search.module.scss';

//Icon
import { ClearIcon } from 'components/Icons/ClearIcon';
import { SearchIcon } from 'components/Icons/SearchIcon';

//Redux
import { onChangeValue, setItems } from 'features/search/searchSlice';
import { useDispatch, useSelector } from 'react-redux';

//Other
import axios from 'axios';
import { OPTIONS } from 'features/api/api';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Search = ({ showSearch }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { value } = useSelector(state => state.search);

	const [fetching, setFetching] = useState(false);

	const onChangeSearch = e => dispatch(onChangeValue(e.target.value));
	const handleClearValue = () => dispatch(onChangeValue(''));

	const fetchNewResult = () => {
		axios
			.get(
				`https://moviesdatabase.p.rapidapi.com/titles/search/title/${value}?info=custom_info&limit=21&page=1`,
				OPTIONS
			)
			.then(response =>
				dispatch(
					setItems([...response.data.results].filter(item => item.primaryImage))
				)
			)
			.finally(() => setFetching(false));
	};

	useEffect(() => {
		if (fetching) {
			fetchNewResult();
		}
	}, [fetching]);

	//Searching
	const inputRef = useRef();
	const searchByPress = e => {
		if (!value) return;

		if (e.key === 'Enter') {
			setFetching(true);
			navigate(`search/${value}`);
		}
	};

	const searchMedia = () => {
		if (!value) return;
		setFetching(true);
		navigate(`search/${value}`);
	};

	return (
		<div
			className={
				showSearch ? `${styles.search} ${styles.visible}` : styles.search
			}
		>
			<div className={styles.entry}>
				<input
					type='text'
					value={value}
					ref={inputRef}
					onKeyDown={searchByPress}
					onChange={onChangeSearch}
					placeholder='Search...'
				/>
				<div onClick={handleClearValue}>
					<ClearIcon />
				</div>
			</div>
			<button onClick={searchMedia}>
				<SearchIcon />
			</button>
		</div>
	);
};
