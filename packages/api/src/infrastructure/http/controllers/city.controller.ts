import { Controller, Get, HttpException, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { BusinessError } from "../../../utils/business-error";
import { SearchCityUseCase } from "../../../usecases/search-city.usecase";
import { SearchDto } from "../dtos/search.dto";

@ApiTags("City")
@Controller("v1/city")
export class CityController {
  constructor(private readonly searchCityUseCase: SearchCityUseCase) {}

  @Get(":searchTerm")
  async searchCity(@Param() { searchTerm }: SearchDto) {
    try {
      return await this.searchCityUseCase.execute(searchTerm);
    } catch (error: unknown) {
      if (error instanceof BusinessError) {
        throw new HttpException(error.message, error.code);
      }

      throw error;
    }
  }
}
