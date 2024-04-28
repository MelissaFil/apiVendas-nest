import { ReturnCityDto } from "src/city/dto/returnCity.dto";
import { AddressEntity } from "../entity/address.entity";

export class ReturnAddressDto{
    complement: string;
    number: number;
    cep:string;
    city?: ReturnCityDto;

    constructor(addressEntity: AddressEntity){
        this.complement = addressEntity.complement;
        this.number = addressEntity.number;
        this.cep = addressEntity.cep;
        this.city = addressEntity.city ? new ReturnCityDto(addressEntity.city) : undefined;
    }
}