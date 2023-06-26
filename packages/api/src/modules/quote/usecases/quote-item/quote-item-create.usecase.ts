import { Injectable } from "@nestjs/common";

import { BusinessError, Transaction } from "../../../../common";
import { QuoteItem, QuoteItemInput } from "../../domain";
import { QuoteItemSqliteRepository } from "../../infrastructure/repositories/quote-item.sqlite.repository";
import { QuoteLotSqliteRepository } from "../../infrastructure/repositories/quote-lot.sqlite.repository";

interface QuoteItemCreateUseCaseInput {
  input: QuoteItemInput;
  parentQuoteLotId: string;
  transaction?: Transaction;
}

@Injectable()
export class QuoteItemCreateUseCase {
  constructor(
    private readonly quoteItemRepository: QuoteItemSqliteRepository,
    private readonly quoteLotRepository: QuoteLotSqliteRepository
  ) {}

  private async check(params: QuoteItemCreateUseCaseInput) {
    const { input, parentQuoteLotId, transaction } = params;

    const lot = await this.quoteLotRepository.findOne(
      parentQuoteLotId,
      transaction
    );

    if (!lot) {
      throw new BusinessError("Quote lot not found", 400);
    }

    if (input.amount < 0) {
      throw new BusinessError("Amount must be positive", 400);
    }
  }

  async execute(params: QuoteItemCreateUseCaseInput): Promise<QuoteItem> {
    await this.check(params);

    const { input, parentQuoteLotId, transaction } = params;

    const quotelot = new QuoteItem(input);

    return this.quoteItemRepository.create(
      quotelot,
      parentQuoteLotId,
      transaction
    );
  }
}
