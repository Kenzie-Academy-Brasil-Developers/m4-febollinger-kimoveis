import { getRounds, hashSync } from "bcryptjs";
import {Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, OneToMany, BeforeInsert, BeforeUpdate} from "typeorm";
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

    @CreateDateColumn({type: 'date'})
    createdAt: string

    @UpdateDateColumn({type: 'date'})
    updatedAt: string

    @DeleteDateColumn({type: 'date'})
    deletedAt: string

    @OneToMany(()=> Schedule, (schedule) => schedule.user)
    schedules: Schedule[]

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isHashed = getRounds(this.password)
        if(!isHashed){
            this.password = hashSync(this.password, 9)
        }
    }
    
}

export default User