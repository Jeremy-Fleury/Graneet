import { Injectable } from "@nestjs/common";

import { QuoteLot } from "../../domain";
import { QuoteLotSqliteRepository } from "../../infrastructure/repositories/quote-lot.sqlite.repository";
import { Transaction } from "../../../../common";

interface QuoteLotCreateUseCaseInput {
  parentQuoteLotId: string;
  transaction?: Transaction;
}

@Injectable()
export class QuoteLotCreateUseCase {
  constructor(private readonly quoteLotRepository: QuoteLotSqliteRepository) {}

  async execute({
    parentQuoteLotId,
    transaction,
  }: QuoteLotCreateUseCaseInput): Promise<QuoteLot> {
    const quotelot = new QuoteLot();

    return this.quoteLotRepository.create(
      quotelot,
      parentQuoteLotId,
      transaction
    );
  }
}
