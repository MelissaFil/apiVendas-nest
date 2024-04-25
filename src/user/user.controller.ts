import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto} from './dto/user.dto';

@Controller('user')
export class UserController {

    @Get()
    async getAllUser(){
        return 'Users'
    }

    @Post()
    async createUser(
    @Body() createUser: UserDto){
        return {
            ...createUser,
            password: undefined
        }
    }

}
