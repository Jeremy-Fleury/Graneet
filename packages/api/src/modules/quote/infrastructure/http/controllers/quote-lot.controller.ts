import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { PrismaService } from "../../../../../common";
import { QuoteLotCreateUseCase } from "../../../usecases";
import { QuoteLotCreateDto } from "../dtos/quote-lot-create.dto";

@ApiTags("QuoteLot")
@Controller("v1/quote-lot")
export class QuoteLotController {
  constructor(
    private readonly quoteLotCreateUseCase: QuoteLotCreateUseCase,
    private readonly prismaService: PrismaService
  ) {}

  @Post()
  async create(@Body() body: QuoteLotCreateDto) {
    return this.prismaService.$transaction(async (transaction) =>
      this.quoteLotCreateUseCase.execute({
        parentQuoteLotId: body.parentQuoteLotId,
        transaction,
      })
    );
  }
}
