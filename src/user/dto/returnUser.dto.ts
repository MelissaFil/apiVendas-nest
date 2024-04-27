import { UserEntity } from "../entity/user.entity";

export class ReturnUserDto{
    id: number;
    name: string;   
    email: string;
    cpf: string;
    phone: string;
    password: string;

    constructor(userEntity: UserEntity){
        this.id = userEntity.id;
        this.name= userEntity.name;
        this.email = userEntity.email;
        this.cpf= userEntity.cpf;
        this.phone= userEntity.phone;
        this.password= userEntity.password;
    }
}