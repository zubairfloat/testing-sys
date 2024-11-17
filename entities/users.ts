import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class users {

    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column()
    name: string = '';

    @Column()
    email: string = '';
}