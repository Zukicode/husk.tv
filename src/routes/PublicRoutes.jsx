import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';

export const PublicRoutes = () => {
	return (
		<Routes>
			{publicRoutes.map(route => (
				<Route key={route.path} path={route.path} element={route.element} />
			))}
		</Routes>
	);
};
