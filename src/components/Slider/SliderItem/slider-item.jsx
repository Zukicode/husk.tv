import React from 'react';

//Styles
import styles from './../slider.module.scss';

import { useNavigate } from 'react-router-dom';

export const SliderItem = ({ photoURL = {}, id, keyId, activeSlider }) => {
	const navigate = useNavigate();

	const redirectToWatch = () => navigate(`/title/${id}`);

	return (
		<div
			onClick={redirectToWatch}
			className={
				keyId === activeSlider
					? `${styles.image} ${styles.active}`
					: styles.image
			}
			style={{
				backgroundImage: `url("${photoURL}")`,
			}}
		/>
	);
};
