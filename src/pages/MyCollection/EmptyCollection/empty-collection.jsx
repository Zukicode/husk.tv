//Styles
import styles from './empty-collection.module.scss';

//Image and Icons
import emptyImage from 'assets/images/empty-collection.png';
import { BackIcon } from 'components/Icons/BackIcon';
import { useNavigate } from 'react-router-dom';

export const EmptyCollection = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.EmptyCollection}>
			<div>
				<img src={emptyImage} alt='spongeBob' />
				<div>
					<h1 className={styles.title}>You have nothing in your collection!</h1>
					<p>
						Right now, you can add a movie you like and want to watch to your
						collection by going to the movie page and clicking the add to
						collection button!
					</p>
					<button onClick={() => navigate('/')}>
						<BackIcon />
						Back
					</button>
				</div>
			</div>
		</div>
	);
};
