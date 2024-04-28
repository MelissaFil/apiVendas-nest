import { Injectable, NotFoundException } from '@nestjs/common';
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
            password: passwordHashed,
            typeUser: 1
        })

    }

    async getAllUser(): Promise<UserEntity[]>{
        return this.userRepository.find()
    }

    async getUserById(id:number): Promise<UserEntity>{
        const user = await this.userRepository.findOne({
            where:{
                id
            }
        })

        if(!user){
            throw new NotFoundException('UserId not found');
        }
        
        return user;
        
    }

    async getAddressByUser(id:number): Promise<UserEntity>{
        return this.userRepository.findOne({
            where:{id},
            relations:{addresses:{city:{state:true}}}
        })
    }
}
