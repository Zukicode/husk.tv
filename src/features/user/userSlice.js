import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {},
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, { payload }) => {
			state.user = {
				id: payload.id,
				token: payload.token,
				email: payload.email,
			};
		},
		removeUser: state => {
			state.user = {};
		},
	},
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
