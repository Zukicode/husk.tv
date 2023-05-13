import React, { useState } from 'react';

//Styles
import styles from './register-form.module.scss';

//Icons
import { HidePass } from 'components/Icons/HidePass';
import { ShowPass } from 'components/Icons/ShowPass';

export const RegisterForm = ({ setLogin, handleClick }) => {
	const [values, setValues] = useState({
		username: '',
		email: '',
		password: '',
		photoURL: '',
	});

	//Password Show OR Hide
	const [isVisiblePass, setVisiblePass] = useState(false);
	const handleChangeVisiblePass = () => setVisiblePass(!isVisiblePass);

	return (
		<form className={styles.registerForm}>
			<h1>Create account</h1>
			<div className={styles.inputs}>
				<input
					type='email'
					value={values.email}
					onChange={e => setValues({ ...values, email: e.target.value })}
					placeholder='Email'
				/>
				<input
					type='text'
					value={values.username}
					onChange={e => setValues({ ...values, username: e.target.value })}
					placeholder='Username'
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
				<input
					type='text'
					placeholder='Image URL'
					value={values.photoURL}
					onChange={e => setValues({ ...values, photoURL: e.target.value })}
				/>
			</div>
			<button onClick={e => handleClick(e, values.email, values.password)}>
				Sign Up
			</button>

			<div className={styles.newAccount}>
				<div className={styles.divider}></div>
				<p>
					Have already an account?
					<span onClick={() => setLogin(true)}> Login here</span>
				</p>
			</div>
		</form>
	);
};
