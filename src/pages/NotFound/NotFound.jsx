import React, { useEffect } from 'react';

//Styles
import styles from './NotFound.module.scss';

//Images
import notFoundImage from 'assets/images/404.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { AUTH_ROUTE, COLLECTION_ROUTE } from 'routes/routes';
import { useAuth } from 'hooks/use-auth';

const NotFound = () => {
	const { isAuth } = useAuth();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (pathname === COLLECTION_ROUTE && !isAuth) {
			navigate(AUTH_ROUTE);
		}
	}, []);

	return (
		<div className={styles.notfound}>
			<img src={notFoundImage} alt='404' />
			<div className={styles.text}>
				<h1>This page not found!</h1>
				<p>
					If you are not sure that the page you are looking for is located at
					this address, please contact us or try again later.
				</p>
			</div>
		</div>
	);
};

export default NotFound;
