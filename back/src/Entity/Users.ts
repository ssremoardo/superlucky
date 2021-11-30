import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { IsEmail, IsNotEmpty } from "class-validator";

import Profile from "./";
import Apartment from "./Campaign";

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsNotEmpty()
  @Column({
    length: 150,
  })
  name!: string;

  @Column({
    length: 60,
  })
  phone?: string;

  @Column({
    length: 60,
  })
  celphone?: string;

  @IsNotEmpty()
  @IsEmail()
  @Column({
    length: 150,
  })
  email!: string;

  @Column({
    length: 150,
  })
  password?: string;

  @Column({
    length : 50,
    nullable: true    
  })
  userIdTelegram?: string;

  @Column({
    type: "tinyint",
    default: 1
  })
  perfil!: number;

  @JoinTable()
  @ManyToMany((type) => Profile)
  profiles!: Profile[];

  @JoinTable()
  @ManyToMany((type) => Apartment, { cascade: true })
  apartment?: Apartment[]

  @Column({
    type: "tinyint",
    default: 1
  })
  active!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
