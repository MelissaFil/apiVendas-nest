import { ReturnAddressDto } from "src/address/dto/returnAddress.dto.";
import { UserEntity } from "../entity/user.entity";

export class ReturnUserDto{
    id: number;
    name: string;   
    email: string;
    cpf: string;
    phone: string;
    password: string;
    addresses?: ReturnAddressDto[];

    constructor(userEntity: UserEntity){
        this.id = userEntity.id;
        this.name= userEntity.name;
        this.email = userEntity.email;
        this.cpf= userEntity.cpf;
        this.phone= userEntity.phone;
        this.password= userEntity.password;
        this.addresses = userEntity.addresses 
            ? userEntity.addresses.map((address) => new ReturnAddressDto(address)) 
            : undefined;
    }
}