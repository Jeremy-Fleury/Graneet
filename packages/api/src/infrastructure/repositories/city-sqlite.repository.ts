import { Injectable } from "@nestjs/common";

import { City, CityInput } from "../../domain/entities/city.entity";
import { CityRepository } from "../../domain/repositories/city.repository";
import { PrismaService } from "../database/prisma.service";

@Injectable()
export class CitySqliteRepository implements CityRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: CityInput): Promise<City> {
    const city = await this.prismaService.city.create({
      data: {
        postalCode: input.postalCode,
        cityName: input.cityName,
        routingWording: input.routingWording,
        cityCode: input.cityCode,
      },
    });

    return city;
  }

  async search(searchTerm: string): Promise<City[]> {
    const cities = await this.prismaService.city.findMany({
      where: {
        OR: [
          {
            postalCode: {
              contains: searchTerm,
            },
          },
          {
            cityName: {
              contains: searchTerm,
            },
          },
          {
            routingWording: {
              contains: searchTerm,
            },
          },
          {
            cityCode: {
              contains: searchTerm,
            },
          },
        ],
      },
      take: 100,
    });

    return cities;
  }
}
