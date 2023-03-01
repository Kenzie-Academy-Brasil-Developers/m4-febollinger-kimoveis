import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import Address from "./addresses.entity";
import Category from "./category.entity";


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

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @OneToOne(()=> Address)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category)
    category: number

}

export default RealEstate