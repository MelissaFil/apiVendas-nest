import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class AddressEntity{
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name:'user_id', nullable: false})
    userId: number;

    @Column({name:'complement', nullable: false})
    complement: string;

    @Column({name:'number', nullable:false})
    numberAddress: number;

    @Column({name:'cep', nullable: false})
    cep:string;

    @Column({name:'city_id', nullable:false})
    cityId: number;

    @CreateDateColumn({name:'created_at', nullable:false})
    createdAt: Date;

    @UpdateDateColumn({name:'updated_at', nullable:false})
    updatedAr:Date;
}