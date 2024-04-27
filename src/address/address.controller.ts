import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressDto } from './dto/addressDto.dto';
import { AddressEntity } from './entity/address.entity';

@Controller('address')
export class AddressController {

    constructor(private readonly addressService: AddressService){};

    @Post('/:userId')
    async postAddress(@Body() addressDto: AddressDto, @Param('userId') userId:number): Promise<AddressEntity>{
        return this.addressService.createAddress(addressDto, userId);
    }

    @Get('/:userId')
    async getAddressByUser(@Param('userId') userId: number): Promise<AddressEntity[]>{
        return this.addressService.getAddressByUser(userId)
    }
}
