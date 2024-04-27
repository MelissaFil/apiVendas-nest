import { Module } from '@nestjs/common';
import { StateService } from './state.service';
import { StateEntity } from './entity/state.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateController } from './state.controller';

@Module({
  imports:[TypeOrmModule.forFeature([StateEntity])],
  controllers: [StateController],
  providers: [StateService]
})
export class StateModule {}
