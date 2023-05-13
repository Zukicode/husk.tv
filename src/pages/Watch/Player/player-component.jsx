import React from 'react';

//Styles
import styles from './player.module.scss';

export const Player = ({ video }) => {
	return (
		<iframe
			className={styles.player}
			title={video}
			frameBorder='0'
			src={video}
			allowFullScreen='yes'
		></iframe>
	);
};
