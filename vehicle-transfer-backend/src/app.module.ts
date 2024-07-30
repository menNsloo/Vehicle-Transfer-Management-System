import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Driver } from './driver/driver.entity';
import { Vehicle } from './vehicle/vehicle.entity';
import { Transfer } from './transfer/transfer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '***',
      database: 'vehicle-transfer',
      entities: [Driver, Vehicle, Transfer],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Driver, Vehicle, Transfer]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
