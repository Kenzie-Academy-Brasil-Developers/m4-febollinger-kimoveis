import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, OneToMany, JoinColumn } from "typeorm";
import Address from "./addresses.entity";
import Category from "./category.entity";
import Schedule from "./schedules.entity";


@Entity('real_state')
class RealEstate {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'boolean', default:false})
    sold: boolean

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    value: number | string;

    @Column({type: 'integer'})
    size: number

    @CreateDateColumn({type: 'date'})
    createdAt: string

    @UpdateDateColumn({type: 'date'})
    updatedAt: string

    @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
    schedules: Schedule[]

    @OneToOne(()=> Address)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category)
    category: Category

}

export default RealEstate