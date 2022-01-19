import * as mongoose from 'mongoose';

export const GameSchema = new mongoose.Schema({
    gameId: String,
    userId: String,
    data: Object,
    winner: String,
});
