import { useState } from 'react';

//Firebase
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
} from 'firebase/auth';

//Forms
import { setUser } from 'features/user/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm/register-form';

export const Forms = () => {
	const [isLogin, setLogin] = useState(true);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const saveToLocalStorage = (email, password) => {
		localStorage.setItem('user', JSON.stringify({ email, password }));
	};

	const handleLogin = (email, password, e) => {
		e.preventDefault();
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user);
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.accessToken,
					})
				);
				navigate('/');
			})
			.catch(console.error);
		saveToLocalStorage(email, password);
	};

	const handleRegister = (e, email, password) => {
		e.preventDefault();
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user);
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.accessToken,
					})
				);
				navigate('/');
			})
			.catch(console.error);
	};

	return isLogin ? (
		<LoginForm handleClick={handleLogin} setLogin={setLogin} />
	) : (
		<RegisterForm handleClick={handleRegister} setLogin={setLogin} />
	);
};
