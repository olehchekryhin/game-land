import UserActionTypes from "./user.types";

export const setProfile = user => ({
    type: UserActionTypes.SET_PROFILE,
    payload: user
});
