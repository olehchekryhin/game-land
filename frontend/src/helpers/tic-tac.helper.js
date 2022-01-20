import { ANONYMOUS_USER_ID } from "../constants/constants";

export const getMessage = ({ meetingId, data, winner }, gameInfo, profile, gId) => {
    const message = { meetingId, gameId: gId, data };

    if (winner) {
        message.winner = profile && profile.id ? profile.id : ANONYMOUS_USER_ID;
    }

    if (gameInfo && !gameInfo.userIdAdditional) {
        message.userIdAdditional = profile && gameInfo.userId !== profile.id ? profile.id : ANONYMOUS_USER_ID;
    } else {
        message.userIdAdditional = gameInfo && gameInfo.userIdAdditional ? gameInfo.userIdAdditional : null;
    }

    message.userId = gameInfo && gameInfo.userId ? gameInfo.userId : null;

    return message;
};
