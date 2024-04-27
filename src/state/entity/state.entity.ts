import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class StateEntity{

    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name:'name', nullable:false})
    name: string;S
    
    @CreateDateColumn({name:'created_at', nullable:false})
    createdAt: Date;

    @UpdateDateColumn({name:'updated_at', nullable:false})
    updatedAr:Date;
}