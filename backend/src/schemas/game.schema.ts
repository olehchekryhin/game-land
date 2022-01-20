import * as mongoose from 'mongoose';

export const GameSchema = new mongoose.Schema({
    gameId: String,
    userId: String,
    userIdAdditional: String,
    data: Object,
    winner: String,
});
