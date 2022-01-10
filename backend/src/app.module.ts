import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from "./chat.gateway";
import { GameModule } from "./components/game/game.module";

@Module({
  imports: [GameModule],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
