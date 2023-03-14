import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Status {

    @PrimaryGeneratedColumn({type: 'int'})
    public readonly id_status: number;
    @Column({type: 'varchar'})
    public status: string
}
