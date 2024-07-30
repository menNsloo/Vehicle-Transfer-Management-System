import { Body, Controller, Get, Post } from '@nestjs/common';
import { DriverService } from './driver.service';
import { Driver } from './driver.entity';

@Controller('driver')
export class DriverController {
    constructor(private readonly driverServices: DriverService) { }

    @Post()
    create(@Body() driver: Driver): Promise<Driver> {
        return this.driverServices.create(driver);
    }

    @Get()
    findAll(): Promise<Driver[]> {
        return this.driverServices.findAll();
    }
}
