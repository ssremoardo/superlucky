import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import Campaign from "./Campaign";
import Contact from "./Contacts";

@Entity()
export default class Subscription {
    constructor() {
        this.name = "";
    }
    @PrimaryGeneratedColumn()
    id?: number;

    @ManyToMany((type) => Campaign, { cascade: false })
    @JoinTable()
    campaign?: Campaign[];

    @ManyToMany((type) => Contact, { cascade: false })
    @JoinTable()
    contact?: Contact[];

    @Column()
    subscribedAt: Date

    @Column()
    luckycode: string
}
