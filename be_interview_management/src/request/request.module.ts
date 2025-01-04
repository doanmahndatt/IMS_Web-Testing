import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { Request } from './entities/request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Request])],
  controllers: [RequestController],
  providers: [RequestService],
})
// export class RequestModule {}
export class RequestModule {
  constructor() {
    console.log('RequestModule initialized');
  }
}
