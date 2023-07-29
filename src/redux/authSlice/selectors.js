export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;
export const selectUserName = (state) => state.auth.user.name;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectState = (state) => state;
export const selectToken = (state) => state.auth.token;