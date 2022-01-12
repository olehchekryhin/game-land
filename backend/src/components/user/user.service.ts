import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../interfaces/user.interface';
import { CreateUserDto } from '../../dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<User>,
    ) {}

    async findOne(email: string): Promise<Array<User>> {
        const user = this.userModel.find({"email": email});
        return user;
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdGame = new this.userModel(createUserDto);
        return createdGame.save();
    }
}
