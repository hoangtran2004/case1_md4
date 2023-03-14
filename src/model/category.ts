import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn({type: 'int'})
    public readonly id_category: number;
    @Column({type: 'varchar'})
    public name: string;
}