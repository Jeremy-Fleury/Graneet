import { Injectable } from "@nestjs/common";

import { City, CityInput } from "../../domain/entities/city.entity";
import { CityRepository } from "../../domain/repositories/city.repository";

@Injectable()
export class CityInMemoryRepository implements CityRepository {
  private cities: City[] = [];

  create = async (input: CityInput): Promise<City> => {
    const newCity = new City(input);

    this.cities.push(newCity);

    return newCity;
  };

  search = async (searchTerm: string): Promise<City[]> => {
    const cities = this.cities.filter((city) => {
      const searchTermToLower = searchTerm.toLowerCase();

      if (city.cityName.toLowerCase().includes(searchTermToLower)) {
        return city;
      }

      if (city.postalCode.toLowerCase().includes(searchTermToLower)) {
        return city;
      }

      if (city.cityCode.toLowerCase().includes(searchTermToLower)) {
        return city;
      }

      if (city.routingWording.toLowerCase().includes(searchTermToLower)) {
        return city;
      }

      return false;
    });

    return cities;
  };
}
