import { LogOut } from 'components/Icons/LogOut';

//Redux
import { removeUser } from 'features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

//Styles
import styles from './profile-modal.module.scss';

export const ProfileModal = ({ setShowModalProfile }) => {
	const dispatch = useDispatch();

	const { user } = useSelector(state => state.user);

	const signOut = () => {
		localStorage.removeItem('user');
		dispatch(removeUser());
	};

	return (
		<div
			onClick={() => setShowModalProfile(false)}
			className={styles.profileModal}
		>
			<div className={styles.title}>
				<div className={styles.description}>
					<h1>{user.email.split('@gmail.com').join('')}</h1>
					<p>{user.email}</p>
				</div>

				<div className={styles.image}>
					<img
						src='https://avatars.githubusercontent.com/u/88688235?v=4'
						alt='user'
					/>
				</div>
			</div>

			<div className={styles.divider}></div>

			<div className={styles.buttons}>
				<button onClick={signOut}>
					<span>
						<LogOut />
					</span>
					Log out
				</button>
			</div>
		</div>
	);
};
