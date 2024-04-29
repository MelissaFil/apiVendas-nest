import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { ReturnUserDto } from 'src/user/dto/returnUser.dto';
import { AuthService } from './auth.service';
import { UserEntity } from 'src/user/entity/user.entity';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @UsePipes(ValidationPipe)
    @Post()
    async login(@Body() loginDto:LoginDto): Promise<ReturnUserDto>{
       return new ReturnUserDto(await this.authService.login(loginDto));
    }

   
}
