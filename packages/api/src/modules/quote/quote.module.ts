import { Module } from "@nestjs/common";

import { PrismaService } from "../../common/infrastructure";

import {
  QuoteController,
  QuoteItemController,
  QuoteItemSqliteRepository,
  QuoteLotController,
  QuoteLotSqliteRepository,
  QuoteSqliteRepository,
} from "./infrastructure";
import {
  QuoteCreateUseCase,
  QuoteDeleteUseCase,
  QuoteLotCreateUseCase,
  QuoteItemCreateUseCase,
} from "./usecases";

@Module({
  imports: [],
  controllers: [QuoteController, QuoteLotController, QuoteItemController],
  providers: [
    PrismaService,
    QuoteCreateUseCase,
    QuoteDeleteUseCase,
    QuoteItemCreateUseCase,
    QuoteItemSqliteRepository,
    QuoteLotCreateUseCase,
    QuoteLotSqliteRepository,
    QuoteSqliteRepository,
  ],
})
export class QuoteModule {}
