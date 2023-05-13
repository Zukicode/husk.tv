import { useEffect } from 'react';

//Components
import { MediaItem } from 'components/MediaItem/media-item';
import { EmptyCollection } from './EmptyCollection';

//Styles
import styles from './MyCollection.module.scss';

//Redux
import { useAuth } from 'hooks/use-auth';
import { useSelector } from 'react-redux';

//Route
import { AUTH_ROUTE } from 'routes/routes';
import { useNavigate } from 'react-router-dom';

const MyCollection = () => {
	const { isAuth } = useAuth();
	const navigate = useNavigate();

	const { collectionList } = useSelector(state => state.collection);

	useEffect(() => {
		if (!isAuth) {
			navigate(AUTH_ROUTE);
		}
	}, [isAuth]);

	if (!collectionList.length) {
		return <EmptyCollection />;
	}

	return (
		<div className={styles.MyCollection}>
			<div className={styles.medias}>
				{collectionList.map(collectionItem => (
					<MediaItem path={'/title'} {...collectionItem} />
				))}
			</div>
		</div>
	);
};

export default MyCollection;
