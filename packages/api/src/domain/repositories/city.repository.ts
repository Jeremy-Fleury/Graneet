import { City, CityInput } from "../entities/city.entity";

export interface CityRepository {
  create: (city: CityInput) => Promise<City>;
  search: (searchTerm: string) => Promise<City[]>;
}
