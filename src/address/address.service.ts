import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entity/address.entity';
import { Repository } from 'typeorm';
import { AddressDto } from './dto/addressDto.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AddressService {

    constructor(
        @InjectRepository(AddressEntity) 
        private readonly addressRepository: Repository<AddressEntity>,
        private readonly userService: UserService){}

        async createAddress(addressDto: AddressDto, userId: number){
            await this.userService.getUserById(userId);
       
            return this.addressRepository.save({
                ...addressDto,
                userId
            })
            
           
        }

        async getAddressByUser(userId:number): Promise<AddressEntity[]>{
            return this.addressRepository.find({
                where:{
                    userId
                }
            })
        }
}