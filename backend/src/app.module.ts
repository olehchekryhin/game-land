import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from "./chat.gateway";
import { GameModule } from "./components/game/game.module";
import { UserModule } from "./components/user/user.module";
import { join } from 'path';
import { AuthModule } from './components/auth/auth.module';
import { JwtStrategy } from "./components/auth/jwt.strategy";

@Module({
  imports: [
      GameModule,
      ServeStaticModule.forRoot({
        rootPath: join(__dirname, '../../', 'frontend/build'),
      }),
      UserModule,
      AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway, JwtStrategy],
})
export class AppModule {}
