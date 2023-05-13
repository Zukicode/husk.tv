import React from 'react';

//Styles
import styles from './loader.module.scss';

export const Loader = () => {
	return (
		<div className={styles['lds-facebook']}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
