import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CityEntity } from './entity/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class CityService {

    constructor(@InjectRepository(CityEntity) private readonly cityRepository:Repository<CityEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,){}

    async getAllCity(stateId: number): Promise<CityEntity[]>{

        const citiesCache: CityEntity[] = await this.cacheManager.get(`state_${stateId}`);

        if(citiesCache){
            return citiesCache
        }

        const cities = await this.cityRepository.find({
            where:{
                stateId

            },
            relations:['state'],
        });

        await this.cacheManager.set(`state_${stateId}`,cities);

        return cities;
    }

    async getCityById (id:number): Promise<CityEntity>{
        const city = await this.cityRepository.findOne({
            where:{id},
            relations:['state'],
            
        })

        if(!city){
            throw new NotFoundException('CityId not found')
        }
        return city
    }
}
