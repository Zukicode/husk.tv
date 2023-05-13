import { useEffect } from 'react';

//Styles
import styles from './app.module.scss';

//Components
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';

//Route
import { setCollectionList } from 'features/collection/collectionSlice';
import { setUser } from 'features/user/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from 'hooks/use-auth';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { PrivateRoutes } from 'routes/PrivateRoutes';
import { PublicRoutes } from 'routes/PublicRoutes';

export const App = () => {
	const { pathname } = useLocation();
	const { isAuth } = useAuth();

	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem('collection')) {
			dispatch(
				setCollectionList(JSON.parse(localStorage.getItem('collection')))
			);
		}
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const handleLogin = (email, password, e) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.accessToken,
					})
				);
			})
			.catch(console.error);
	};

	useEffect(() => {
		if (localStorage.getItem('user')) {
			const userData = JSON.parse(localStorage.getItem('user'));
			handleLogin(userData.email, userData.password);
		}
	}, []);

	return (
		<div className={styles.App}>
			<Header />
			<div className={styles.main}>
				<Sidebar />

				{isAuth ? <PrivateRoutes /> : <PublicRoutes />}

				<Footer />
			</div>
		</div>
	);
};
