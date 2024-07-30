import { Controller, Get, Post, Body } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './vehicle.entity';

@Controller('vehicles')
export class VehicleController {
    constructor(private readonly vehicleService: VehicleService) { }

    @Post()
    create(@Body() vehicle: Vehicle): Promise<Vehicle> {
        return this.vehicleService.create(vehicle);
    }

    @Get()
    findAll(): Promise<Vehicle[]> {
        return this.vehicleService.findAll();
    }
}
