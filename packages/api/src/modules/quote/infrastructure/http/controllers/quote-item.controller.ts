import { Body, Controller, HttpException, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import {
  BusinessError,
  PrismaService,
  Transaction,
} from "../../../../../common";
import { QuoteItemCreateUseCase } from "../../../usecases/quote-item/quote-item-create.usecase";
import { QuoteItemCreateDto } from "../dtos";

@ApiTags("QuoteItem")
@Controller("v1/quote-item")
export class QuoteItemController {
  constructor(
    private readonly quoteItemCreateUseCase: QuoteItemCreateUseCase,
    private readonly prismaService: PrismaService
  ) {}

  @Post()
  async create(@Body() body: QuoteItemCreateDto) {
    return this.prismaService.$transaction(async (transaction: Transaction) => {
      try {
        const result = await this.quoteItemCreateUseCase.execute({
          input: {
            amount: body.amount,
          },
          parentQuoteLotId: body.parentQuoteLotId,
          transaction,
        });

        return result;
      } catch (error) {
        if (error instanceof BusinessError) {
          throw new HttpException(error.message, error.code);
        }

        throw error;
      }
    });
  }
}
