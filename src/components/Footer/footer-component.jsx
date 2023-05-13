import React from 'react';

//Styles
import styles from './footer.module.scss';

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<p>Created by</p>
			<a href='https://github.com/Zukicode' target='_blank'>
				zukicode
			</a>
		</div>
	);
};
