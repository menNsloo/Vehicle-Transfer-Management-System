import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from './driver.entity';

@Injectable()
export class DriverService {
    constructor(
        @InjectRepository(Driver)
        private readonly driverRepository: Repository<Driver>,
    ) { }

    create(driver: Driver): Promise<Driver> {
        return this.driverRepository.save(driver);
    }

    findAll(): Promise<Driver[]> {
        return this.driverRepository.find();
    }
}
