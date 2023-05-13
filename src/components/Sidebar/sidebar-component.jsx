//Styles
import styles from './sidebar.module.scss';

//Component
import { SidebarLayout } from 'components/SidebarLayout';

export const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<SidebarLayout />
		</div>
	);
};
