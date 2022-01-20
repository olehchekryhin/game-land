import { Document } from 'mongoose';

export interface Game extends Document {
    readonly gameId: string;
    readonly userId: string;
    readonly userIdAdditional: string;
    readonly winner: any;
    readonly data: any;
}
