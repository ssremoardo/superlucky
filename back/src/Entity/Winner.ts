import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import Campaign from "./Campaign";
import Contact from "./Contacts";
import Prize from "./Prize";
import Subscription from "./Subscription";

@Entity()
export default class Winner {
    constructor() {
        this.name = "";
    }
    @PrimaryGeneratedColumn()
    id?: number;

    @ManyToMany((type) => Campaign, { cascade: false })
    @JoinTable()
    campaign?: Campaign[];

    @ManyToMany((type) => Subscription, { cascade: false })
    @JoinTable()
    subscription?: Subscription[];

    @ManyToMany((type) => Prize, { cascade: false })
    @JoinTable()
    prize?: Prize[];
}
