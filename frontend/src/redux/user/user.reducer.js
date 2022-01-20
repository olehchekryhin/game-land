import UserActionTypes from "./user.types";

const initialState = {
    profile: null
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case UserActionTypes.SET_PROFILE:
            localStorage.setItem("profile", JSON.stringify(action.payload));
            return {
                ...state,
                profile: action.payload,
            };
        default:
            return state
    }
}

export default userReducer;
