import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import Subscription from "./Subscription";
import Winner from "./Winner";

@Entity()
export default class Campaign {
    constructor() {
        this.name = "";
    }
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    title: string;

    @Column({ type: 'datetime' })
    startAt: Date;

    @Column({ type: 'datetime' })
    endsAt: Date;

    @ManyToMany((type) => Subscription, { cascade: false })
    @JoinTable()
    subscription?: Subscription[];

    @ManyToMany((type) => Winner, { cascade: false })
    @JoinTable()
    winner?: Winner[];
}
