import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Prize {
    constructor() {
        this.name = "";
    }
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    title: string;

    @Column()
    description: string

    @Column()
    imagePath: string
}
