import * as mongoose from 'mongoose';

export const GameSchema = new mongoose.Schema({
    gameId: String,
    data: Object,
});
