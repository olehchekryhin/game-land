import { createSelector } from 'reselect';

const selectAuth = state => state.auth;

export const getAccessToken = createSelector(
    [selectAuth],
    auth => auth.accessToken
);
