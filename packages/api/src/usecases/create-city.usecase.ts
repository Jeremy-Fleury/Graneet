import { Injectable } from "@nestjs/common";

import { CitySqliteRepository } from "../infrastructure/repositories/city-sqlite.repository";
import { City, CityInput } from "../domain/entities/city.entity";

@Injectable()
export class CreateCityUseCase {
  constructor(private readonly cityRepository: CitySqliteRepository) {}

  async execute(city: CityInput): Promise<City> {
    return this.cityRepository.create(city);
  }
}
