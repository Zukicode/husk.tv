//Route
import { useNavigate } from 'react-router-dom';

//Icons

//Styles
import { PlayIcon } from 'components/Icons/PlayIcon';
import { formatTime } from 'utils/formatSecond';
import styles from './media-item.module.scss';

//Utils

export const MediaItem = props => {
	const { id = 0, primaryImage = {}, titleText = {}, runtime = {} } = props;

	const navigate = useNavigate();
	const redirectToMedia = () => navigate(`/title/${id}`);

	return (
		<div onClick={redirectToMedia} className={styles.media}>
			<div
				className={styles.image}
				style={{
					backgroundImage: `url("${primaryImage.url}"`,
				}}
			></div>
			<div className={styles.title}>
				<h1>{titleText.text}</h1>

				<div>
					<p>{runtime ? formatTime(runtime.seconds) : ''}</p>
				</div>
			</div>

			<div className={styles.overlay}>
				<div>
					<PlayIcon />
				</div>
			</div>
		</div>
	);
};
