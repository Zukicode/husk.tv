//Styles
import styles from './browse-media.module.scss';

//Components
import { MediaItem } from 'components/MediaItem';

//Redux
import { setMoreItems } from 'features/more/moreSlice';
import { useDispatch } from 'react-redux';

//Route
import { Link } from 'react-router-dom';

export const BrowseMedia = ({ title, mediasArr = [], path }) => {
	const dispatch = useDispatch();

	const clearMore = () => dispatch(setMoreItems([]));

	return (
		<div className={styles.browseMedia}>
			<div className={styles.header}>
				<h1>{title}</h1>
				<Link onClick={clearMore} to={path}>
					Show more...
				</Link>
			</div>
			<div className={styles.listMedia}>
				{mediasArr.map((item, index) => {
					if (index < 4) {
						return <MediaItem key={item.id} id={item.id} {...item} />;
					}
				})}
			</div>
		</div>
	);
};
