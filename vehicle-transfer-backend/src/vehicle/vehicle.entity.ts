import { Entity, PrimaryColumn, Column, } from "typeorm";

@Entity()
export class Vehicle {

    @PrimaryColumn()
    vehicle_number: string;

    @Column()
    vehicle_type: string;

    @Column()
    puc_certificate: string;

    @Column()
    insurance_certificate: string;
}
