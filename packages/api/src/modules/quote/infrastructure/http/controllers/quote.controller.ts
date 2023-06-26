import { Controller, Delete, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { UuidDto } from "../../../../../common";
import { QuoteDeleteUseCase, QuoteCreateUseCase } from "../../../usecases";

@ApiTags("Quote")
@Controller("v1/quote")
export class QuoteController {
  constructor(
    private readonly quoteCreateUseCase: QuoteCreateUseCase,
    private readonly quoteDeleteUseCase: QuoteDeleteUseCase
  ) {}

  @Post()
  async create() {
    return this.quoteCreateUseCase.execute({});
  }

  @ApiTags("Quote")
  @Delete(":id")
  async delete(@Param() { id }: UuidDto) {
    return this.quoteDeleteUseCase.execute({ id });
  }
}
