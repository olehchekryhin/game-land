import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {CreateGameDto} from "../../dto/create-game.dto";
import {GameService} from "./game.service";
import {Patch} from "@nestjs/common/decorators/http/request-mapping.decorator";

@Controller('api/game')
export class GameController {
    constructor(private gameService: GameService) {}

    @Get(':id')
    getById(@Param('id') id: string): any {
        return this.gameService.getById(id);
    }

    @Get('profile/:userId')
    getGamesId(@Param('userId') userId: string): any {
        return this.gameService.getGamesId(userId);
    }

    @Post()
    create(@Body() createCatDto: CreateGameDto): any {
        return this.gameService.create(createCatDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateGameDto: CreateGameDto) {
        return this.gameService.update(id, updateGameDto);
    }
}
