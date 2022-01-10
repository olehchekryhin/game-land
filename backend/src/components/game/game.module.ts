import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { gameProviders } from './game.providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [GameController],
    providers: [
        GameService,
        ...gameProviders,
    ],
    exports: [GameService]
})
export class GameModule {}
