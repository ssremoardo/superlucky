import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Contact {
    constructor() {
        this.name = "";
    }
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column()
    phone: string;
}
