import { CityEntity } from "../entity/city.entity";

export class ReturnCityDto{
    name: string;

    constructor(city: CityEntity){
        this.name=city.name;
    }
}