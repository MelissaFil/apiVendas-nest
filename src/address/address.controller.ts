import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressDto } from './dto/addressDto.dto';
import { AddressEntity } from './entity/address.entity';
import { ReturnAddressDto } from './dto/returnAddress.dto.';

@Controller('address')
export class AddressController {

    constructor(private readonly addressService: AddressService){};

    @Post('/:userId')
    async postAddress(@Body() addressDto: AddressDto, @Param('userId') userId:number): Promise<AddressEntity>{
        return this.addressService.createAddress(addressDto, userId);
    }

    @Get('/:userId')
    async getAddressByUser(@Param('userId') userId: number): Promise<ReturnAddressDto[]>{
        const addresses = [];
        (await this.addressService.getAddressByUser(userId)).map((address)=>{
            addresses.push(new ReturnAddressDto(address))
        })
        return addresses;
       }
       
    }

