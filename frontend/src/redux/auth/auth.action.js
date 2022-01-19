import AuthTypes from "./auth.types";


export const setAccessToken = (accessToken) => ({
    type: AuthTypes.SET_ACCESS_TOKEN,
    payload: accessToken
});

export const resetAccessToken = () => ({
    type: AuthTypes.RESET_ACCESS_TOKEN,
});
