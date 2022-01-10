const getTicTacWinner = (board) => {
    for (let i = 0; i < board.length; i++) {
        if (board[i].every(val => val === board[i][0])) {
            return board[i][0];
        }
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            return board[0][i];
        }
    }

    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return board[0][0];
    }
    if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return board[0][2];
    }

    return null;
};

export {
    getTicTacWinner
}
