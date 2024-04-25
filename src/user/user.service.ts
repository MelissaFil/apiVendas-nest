import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entity/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>){}
    

    async createUser(userDto: UserDto): Promise<UserEntity>{
        const saltOrRounds =10;
        
        const passwordHashed = await hash(userDto.password, saltOrRounds);
        
        return this.userRepository.save({
            ...userDto,
            password: passwordHashed
        })

    }

    async getAllUser(): Promise<UserEntity[]>{
        return this.userRepository.find()
    }
}
