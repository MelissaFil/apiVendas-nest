import { StateEntity } from './entity/state.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StateService {

    constructor(@InjectRepository(StateEntity) private readonly stateRepository: Repository<StateEntity>){}

    async getAllStates(): Promise<StateEntity[]>{
        return this.stateRepository.find()
    }

}
