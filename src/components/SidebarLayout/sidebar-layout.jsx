//Styles
import styles from './sidebar-layout.module.scss';

//Icons
import { BrowseIcon } from 'components/Icons/BrowseIcon';
import { CollectionIcon } from 'components/Icons/CollectionIcon';
import { MovieIcon } from 'components/Icons/MovieIcon';
import { SeriesIcon } from 'components/Icons/SeriesIcon';

//Route
import { useLocation, useNavigate } from 'react-router-dom';
import {
	COLLECTION_ROUTE,
	HOME_ROUTE,
	MOVIE_ROUTE,
	SERIES_ROUTE,
} from 'routes/routes';

//Active Sidebar
import { activeSideBar } from 'utils/activeSideBar';

export const SidebarLayout = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const homeActive = pathname === HOME_ROUTE ? styles.active : '';
	const collectionActive = pathname === COLLECTION_ROUTE ? styles.active : '';

	return (
		<>
			<div className={styles.menu}>
				<ul>
					<li onClick={() => navigate(HOME_ROUTE)} className={homeActive}>
						<BrowseIcon />
						<a>Browse</a>
					</li>
					<li
						onClick={() => navigate(COLLECTION_ROUTE)}
						className={collectionActive}
					>
						<CollectionIcon />
						<a>My Collection</a>
					</li>
				</ul>
			</div>

			<div className={styles.divider}></div>

			<div className={styles.menu}>
				<ul>
					<li
						onClick={() => navigate(MOVIE_ROUTE)}
						className={activeSideBar('movie', pathname, styles)}
					>
						<MovieIcon />
						<a>Movie</a>
					</li>
					<li
						onClick={() => navigate(SERIES_ROUTE)}
						className={activeSideBar('series', pathname, styles)}
					>
						<SeriesIcon />
						<a>Series</a>
					</li>
				</ul>
			</div>
		</>
	);
};
