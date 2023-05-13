export const formatTime = seconds => {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);

	const formattedHours = hours > 0 ? hours + 'h ' : '';
	const formattedMinutes = minutes > 0 ? minutes + 'm' : '';

	return formattedHours + formattedMinutes;
};
