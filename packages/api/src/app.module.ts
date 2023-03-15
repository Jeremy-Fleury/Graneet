import { Module } from "@nestjs/common";

import { PrismaService } from "./infrastructure/database/prisma.service";
import { CityController } from "./infrastructure/http/controllers/city.controller";
import { CitySqliteRepository } from "./infrastructure/repositories/city-sqlite.repository";
import { SearchCityUseCase } from "./usecases/search-city.usecase";

@Module({
  imports: [],
  controllers: [CityController],
  providers: [PrismaService, SearchCityUseCase, CitySqliteRepository],
})
export class AppModule {}
