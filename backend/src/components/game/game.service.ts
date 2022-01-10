import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Game } from '../../interfaces/game.interface';
import { CreateGameDto } from '../../dto/create-game.dto';

@Injectable()
export class GameService {
    constructor(
        @Inject('GAME_MODEL')
        private gameModel: Model<Game>,
    ) {}

    async getById(id): Promise<Array<Game>> {
        const game = this.gameModel.find({"gameId": id});
        return game;
    }

    async create(createCatDto: CreateGameDto): Promise<Game> {
        const createdGame = new this.gameModel(createCatDto);
        return createdGame.save();
    }

    async update(id, { gameId, data }: CreateGameDto): Promise<any> {

        if (data) {
            const game = this.gameModel.findByIdAndUpdate(id, { gameId, data }).setOptions({ overwrite: true, new: true });

            if (!game) {
                throw new NotFoundException();
            }

            return game;
        }

    }
}
