import React from 'react';

//Styles
import styles from './Auth.module.scss';

//Components
import { Forms } from 'components/Forms';

const Auth = () => {
	return (
		<div className={styles.auth}>
			<Forms />
		</div>
	);
};

export default Auth;
