import { Document } from 'mongoose';

export interface Game extends Document {
    readonly gameId: string;
    readonly data: any;
}
