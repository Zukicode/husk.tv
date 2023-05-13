import { useState } from 'react';

//Styles
import styles from './login-form.module.scss';

//Icons
import { HidePass } from 'components/Icons/HidePass';
import { ShowPass } from 'components/Icons/ShowPass';

export const LoginForm = ({ setLogin, handleClick }) => {
	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const [isVisiblePass, setVisiblePass] = useState(false);
	const handleChangeVisiblePass = () => setVisiblePass(!isVisiblePass);

	return (
		<form className={styles.loginForm}>
			<h1>Log in</h1>
			<div className={styles.inputs}>
				<input
					type='email'
					placeholder='Email'
					value={values.email}
					onChange={e => setValues({ ...values, email: e.target.value })}
				/>
				<div className={styles.password}>
					<input
						type={isVisiblePass ? 'text' : 'password'}
						placeholder='Password'
						value={values.password}
						onChange={e => setValues({ ...values, password: e.target.value })}
					/>
					<div
						onClick={handleChangeVisiblePass}
						className={styles.showPassword}
					>
						{isVisiblePass ? <HidePass /> : <ShowPass />}
					</div>
				</div>
			</div>
			<button onClick={e => handleClick(values.email, values.password, e)}>
				Log In
			</button>

			<div className={styles.newAccount}>
				<div className={styles.divider}></div>
				<p>
					Don't have an account?{' '}
					<span onClick={() => setLogin(false)}>Sign up</span>
				</p>
			</div>
		</form>
	);
};
