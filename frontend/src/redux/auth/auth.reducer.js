import AuthTypes from "./auth.types";

const initialSate = {
    accessToken: null
};

function authReducer(state = initialSate, action) {
    switch (action.type) {
        case AuthTypes.SET_ACCESS_TOKEN:
            localStorage.setItem('accessToken', action.payload);
            return {
                ...state,
                accessToken: action.payload
            };
        case AuthTypes.RESET_ACCESS_TOKEN:
            localStorage.removeItem('accessToken');
            localStorage.removeItem('profile');
            return {
                ...state,
                accessToken: null
            };
        default :
            return state
    }
}

export default authReducer;
