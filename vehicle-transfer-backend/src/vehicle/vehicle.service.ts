import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './vehicle.entity';

@Injectable()
export class VehicleService {
    constructor(
        @InjectRepository(Vehicle)
        private readonly vehicleRepository: Repository<Vehicle>,
    ) { }

    create(vehicle: Vehicle): Promise<Vehicle> {
        return this.vehicleRepository.save(vehicle);
    }

    findAll(): Promise<Vehicle[]> {
        return this.vehicleRepository.find();
    }
}
