import {Controller, Request, Post, UseGuards, Get} from '@nestjs/common';
import { LocalAuthGuard } from "./components/auth/local-auth.guard";
import { AuthService } from "./components/auth/auth.service";
import { JwtAuthGuard } from "./components/auth/jwt-auth.guard";
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return 'User profile';
  }
}
