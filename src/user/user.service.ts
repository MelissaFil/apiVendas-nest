import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entity/user.entity';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
    private users: UserEntity[] = [];

    async createUser(userDto: UserDto): Promise<UserEntity>{
        const saltOrRounds =10;
        
        const passwordHashed = await hash(userDto.password, saltOrRounds);
        
        const user = {
            ...userDto,
            id: this.users.length +1,
            password: passwordHashed
        }

        this.users.push(user)
        
        return user;

    }

    async getAllUser(): Promise<UserEntity[]>{
        return this.users
    }
}
