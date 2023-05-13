import React from 'react';

//Styles
import styles from './mobile-sidebar.module.scss';

//Images And Icons
import logo from 'assets/images/logo.png';
import { ClearIcon } from 'components/Icons/ClearIcon';

//Components
import { SidebarLayout } from 'components/SidebarLayout';

export const MobileSidebar = ({ showMobileMenu, setShowMobileMenu }) => {
	const closeMenu = () => setShowMobileMenu(false);

	return (
		<div
			className={
				showMobileMenu
					? `${styles.background} ${styles.show}`
					: styles.background
			}
		>
			<div className={styles.sidebar}>
				<div className={styles.logo}>
					<img src={logo} alt='logo' />

					<div onClick={closeMenu}>
						<ClearIcon />
					</div>
				</div>

				<SidebarLayout />
			</div>
		</div>
	);
};
