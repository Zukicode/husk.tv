import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from 'routes/routes';

export const PrivateRoutes = () => {
	return (
		<Routes>
			{publicRoutes.map(route => (
				<Route key={route.path} path={route.path} element={route.element} />
			))}
			{privateRoutes.map(route => (
				<Route key={route.path} path={route.path} element={route.element} />
			))}
		</Routes>
	);
};
