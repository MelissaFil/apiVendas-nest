import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto} from './dto/user.dto';
import { UserService } from './user.service';
import { UserEntity } from './entity/user.entity';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Post()
    async createUser(@Body() user: UserDto): Promise<UserEntity>{
        return this.userService.createUser(user);
    }

    @Get()
    async getAllUser(): Promise<UserEntity[]>{
        return this.userService.getAllUser();
    }
}
