import { Injectable } from "@nestjs/common";

import { CitySqliteRepository } from "../infrastructure/repositories/city-sqlite.repository";
import { City } from "../domain/entities/city.entity";
import { BusinessError } from "../utils/business-error";

@Injectable()
export class SearchCityUseCase {
  constructor(private readonly cityRepository: CitySqliteRepository) {}

  async execute(searchTerm: string): Promise<City[]> {
    const searchTermTrimmed = searchTerm.trim();

    if (!searchTermTrimmed) {
      throw new BusinessError("Search term is required", 400);
    }

    const cities = await this.cityRepository.search(searchTermTrimmed);

    return cities;
  }
}
