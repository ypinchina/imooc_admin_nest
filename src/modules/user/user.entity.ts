import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
@Entity('admin_user')
export class User {
    @PrimaryGeneratedColumn()
    @Unique(['id'])
    id!: number;

    @Column()
    @Unique('username', ['username'])
    username!: string;

    @Column()
    password!: string;

    @Column()
    role!: string;

    @Column()
    nickname!: string;

    @Column()
    active!: number;

    @Column()
    avatar!: string;
}