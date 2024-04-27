import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDto} from './dto/user.dto';
import { UserService } from './user.service';
import { UserEntity } from './entity/user.entity';
import { ReturnUserDto } from './dto/returnUser.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @UsePipes(ValidationPipe)
    @Post()
    async createUser(@Body() user: UserDto): Promise<UserEntity>{
        return this.userService.createUser(user);
    }

    @Get()
    async getAllUser(): Promise<ReturnUserDto[]>{
        return (await this.userService.getAllUser()).map((userEntity)=> new ReturnUserDto(userEntity));
    }
}
