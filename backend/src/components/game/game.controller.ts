import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {CreateGameDto} from "../../dto/create-game.dto";
import {GameService} from "./game.service";

@Controller('api/game')
export class GameController {
    constructor(private gameService: GameService) {}

    @Get(':id')
    getById(@Param('id') id: string): any {
        return this.gameService.getById(id);
    }

    @Post()
    create(@Body() createCatDto: CreateGameDto): any {
        return this.gameService.create(createCatDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateGameDto: CreateGameDto) {
        return this.gameService.update(id, updateGameDto);
    }
}
