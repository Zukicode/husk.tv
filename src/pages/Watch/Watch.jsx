//Styles
import styles from './Watch.module.scss';

//Icons
import { CollectionIcon } from 'components/Icons/CollectionIcon';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Route
import { useParams } from 'react-router-dom';

//Redux
import {
	addToCollection,
	removeFromCollection,
} from 'features/collection/collectionSlice';
import { fetchTitleById } from 'features/watch/watchSlice';
import { useAuth } from 'hooks/use-auth';

//Components
import { Loader } from 'components/Loader';
import { Player } from './Player';

//Other
import { formatTime } from 'utils/formatSecond';
import { formatNumber, inArray } from 'utils/utils';

const Watch = () => {
	const { id } = useParams();

	const dispatch = useDispatch();
	const { isAuth } = useAuth();
	const { item, status } = useSelector(state => state.watch);
	const { collectionList } = useSelector(state => state.collection);

	const {
		genres = {},
		plot = {},
		titleText = {},
		runtime = {},
		releaseYear = {},
		ratingsSummary = {},
		primaryImage = {},
	} = item;

	const newCollectionItem = () => {
		dispatch(
			addToCollection({
				id,
				primaryImage,
				runtime,
				titleText,
			})
		);
	};

	const deleteCollectionItem = () => {
		dispatch(removeFromCollection(id));
	};

	useEffect(() => {
		dispatch(fetchTitleById(id));
	}, [dispatch, id]);

	if (status !== 'success') {
		return (
			<div className={styles.Loader}>
				<Loader />
			</div>
		);
	}

	return (
		<div className={styles.Watch}>
			<div className={styles.player}>
				<Player video={item.embed} />
			</div>

			<div className={styles.detalies}>
				<div className={styles.title}>
					<h1>
						{titleText.text} | {ratingsSummary.aggregateRating} ✰
					</h1>
				</div>

				<div className={styles.description}>
					<p>{plot.plotText.plainText}</p>
				</div>

				<div className={styles.about}>
					<div className={styles.detail}>
						<p>Genres</p>
						<span>{genres.genres[0].text}</span>
					</div>

					<div className={styles.detail}>
						<p>Release</p>
						<span>{releaseYear.year}</span>
					</div>

					<div className={styles.detail}>
						<p>Time</p>
						<span>{formatTime(runtime.seconds)}</span>
					</div>

					<div className={styles.detail}>
						<p>Vote</p>
						<span>{formatNumber(ratingsSummary.voteCount)}</span>
					</div>
				</div>
			</div>

			{isAuth && (
				<button
					onClick={
						inArray(collectionList, id)
							? deleteCollectionItem
							: newCollectionItem
					}
				>
					<CollectionIcon />

					{inArray(collectionList, id)
						? 'Remove from collection'
						: 'Add to collection'}
				</button>
			)}
		</div>
	);
};

export default Watch;
