import React, { useRef, useState } from 'react';

//Styles
import styles from './header.module.scss';

//Images and Icons
import logo from 'assets/images/logo.png';
import { Search } from 'components/Search';
import { MobileIcon } from 'components/Icons/MobileIcon';
import { SearchIcon } from 'components/Icons/SearchIcon';
import { BackIcon } from 'components/Icons/BackIcon';
import { MobileSidebar } from 'components/MobileSidebar/mobile-sidebar';
import { useNavigate } from 'react-router-dom';

//Route
import { HOME_ROUTE } from 'routes/routes';
import { ProfileModal } from 'components/ProfileModal/profile-modal';
import { useAuth } from 'hooks/use-auth';
import { LoginIcon } from 'components/Icons/LoginIcon';

export const Header = () => {
	const navigate = useNavigate();
	const { isAuth } = useAuth();

	//Modal and Open Block
	const modalProfileRef = useRef();
	const [showModalProfile, setShowModalProfile] = useState(false);
	const [showSearch, setShowSearch] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const showFullSearch = () => {
		setShowSearch(true);
		setShowMobileMenu(false);
	};
	const showMenu = () => setShowMobileMenu(true);
	const handleShowProfile = () => setShowModalProfile(!showModalProfile);

	React.useEffect(() => {
		const handleClickOutside = event => {
			let path = event.composedPath().includes(modalProfileRef.current);
			if (!path) setShowModalProfile(false);
		};

		document.body.addEventListener('click', handleClickOutside);

		//Якщо ми закриваємо наше modal window, то ми очищаємо наш Listener
		return () => document.body.removeEventListener('click', handleClickOutside);
	}, []);

	return (
		<div className={styles.header}>
			{!showSearch && (
				<div className={styles.logo}>
					<div onClick={showMenu} className={styles.mobileMenu}>
						<MobileIcon />
					</div>

					<img onClick={() => navigate(HOME_ROUTE)} src={logo} alt='logo' />
				</div>
			)}

			{showSearch && (
				<div onClick={() => setShowSearch(false)} className={styles.backToMenu}>
					<BackIcon />
				</div>
			)}

			<Search showSearch={showSearch} setShowSearch={setShowSearch} />

			{!showSearch && (
				<div ref={modalProfileRef} className={styles.profile}>
					<div onClick={showFullSearch} className={styles.searchShow}>
						<SearchIcon />
					</div>

					{isAuth ? (
						<img
							src='https://avatars.githubusercontent.com/u/88688235?v=4'
							alt='profile'
							onClick={handleShowProfile}
							className={showModalProfile ? styles.active : ''}
						/>
					) : (
						<button
							onClick={() => navigate('/auth')}
							className={styles.buttonLogin}
						>
							<LoginIcon />
							Login
						</button>
					)}

					{showModalProfile ? (
						<ProfileModal
							setShowModalProfile={setShowModalProfile}
							modalProfileRef={modalProfileRef}
						/>
					) : (
						''
					)}
				</div>
			)}

			<MobileSidebar
				showMobileMenu={showMobileMenu}
				setShowMobileMenu={setShowMobileMenu}
			/>
		</div>
	);
};
