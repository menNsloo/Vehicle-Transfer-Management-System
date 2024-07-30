import { PrimaryColumn, Column, Entity, ManyToMany, ManyToOne, } from "typeorm";
import { Driver } from "src/driver/driver.entity";
import { Vehicle } from "src/vehicle/vehicle.entity";

@Entity()
export class Transfer {
    @PrimaryColumn()
    id: number;

    @ManyToOne(() => Vehicle)
    vehicle: Vehicle;

    @ManyToOne(() => Driver)
    from_driver: Driver;

    @ManyToOne(() => Driver)
    to_driver: Driver;

    @Column()
    transfer_date: Date;
}
