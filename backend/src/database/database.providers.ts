import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect('mongodb+srv://olegc:MRSbnOJyPTJ45siv@cluster0.vhldo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    },
];
