const Reducer = (state, action) => {
    switch (action.type) {
        case 'AUTHENTICATION_USER': {
            const { password, ...user } = action.payload;
            return {
                ...state,
                auth: user
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                auth: null
            }
        }
        default:
            return state
    }
};

export default Reducer;