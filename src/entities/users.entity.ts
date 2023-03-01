import {Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import Schedule from "./schedules.entity";

@Entity('users')
class User{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length:45})
    name: string

    @Column({type: 'varchar', length:45, unique: true})
    email: string

    @Column({type: 'boolean', default: false})
    admin: boolean

    @Column({type: 'varchar', length:120})
    password: string

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @DeleteDateColumn()
    deletedAt: string

    @OneToMany(() => Schedule, (schedules) => schedules.user)
    schedules:Schedule[]
    
}

export default User