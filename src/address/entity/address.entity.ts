import { CityEntity } from "src/city/entity/city.entity";
import { UserEntity } from "src/user/entity/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('address')
export class AddressEntity{
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name:'user_id', nullable: false})
    userId: number;

    @Column({name:'complement', nullable: false})
    complement: string;

    @Column({name:'number', nullable:false})
    number: number;

    @Column({name:'cep', nullable: false})
    cep:string;

    @Column({name:'city_id', nullable:false})
    cityId: number;

    @CreateDateColumn({name:'created_at', nullable:false})
    createdAt: Date;

    @UpdateDateColumn({name:'updated_at', nullable:false})
    updatedAr:Date;

    @ManyToOne(()=>UserEntity, (user)=>user.addresses)
    @JoinColumn({name:'user_id', referencedColumnName: 'id'})
    user?: UserEntity;

    @ManyToOne(()=>CityEntity, (city)=>city.addresses)
    @JoinColumn({name:'city_id', referencedColumnName:'id'})
    city?: CityEntity;
}