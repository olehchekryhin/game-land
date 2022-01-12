import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from "../../dto/create-user.dto";
import { UserService } from "./user.service";

@Controller('api/user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    create(@Body() createUserDto: any): any {
        return this.userService.create(createUserDto);
    }
}
