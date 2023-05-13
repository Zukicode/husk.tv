const MOVIE = 'movie';
const SERIES = 'series';

export const activeSideBar = (type, pathname, styles) => {
	if (type === MOVIE && pathname.includes(MOVIE)) return styles.active;
	if (type === SERIES && pathname.includes(SERIES)) return styles.active;
};
