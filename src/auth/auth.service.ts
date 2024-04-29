import { Injectable, NotFoundException } from '@nestjs/common';
import { ReturnUserDto } from 'src/user/dto/returnUser.dto';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { UserEntity } from 'src/user/entity/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor( private readonly userService: UserService){}

    async login(loginDto:LoginDto): Promise<UserEntity>{
        const user: UserEntity | undefined = await this.userService.
        getUserByEmail(loginDto.email)
        .catch(()=> undefined);
        
        const isMatch = await bcrypt.compare(loginDto.password, user?.password || '');

        if(!user || !isMatch){
            throw new NotFoundException('Email or password error!')
        }

        return user
    }

}
