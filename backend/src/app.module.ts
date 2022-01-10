import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from "./chat.gateway";
import { GameModule } from "./components/game/game.module";
import { join } from 'path';

@Module({
  imports: [
      GameModule,
      ServeStaticModule.forRoot({
        rootPath: join(__dirname, '../../../', 'frontend/build'),
      }),
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
