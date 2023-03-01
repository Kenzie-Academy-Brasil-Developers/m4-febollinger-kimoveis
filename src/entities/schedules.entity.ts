import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import RealEstate from "./realState.entity";
import User from "./users.entity";

@Entity('schedules_users_properties')
class Schedule {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'date'})
    date: string

    @Column({type:'timestamp'})
    hour: string

    @ManyToOne(() => RealEstate)
    propertie: RealEstate

    @ManyToOne(() => User)
    user: User
}

export default Schedule