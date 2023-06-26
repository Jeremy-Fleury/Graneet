import { Injectable } from "@nestjs/common";

import { QuoteSqliteRepository } from "../../infrastructure/repositories/quote.sqlite.repository";
import { Transaction } from "../../../../common";
import { Quote } from "../../domain";

interface QuoteCreateUseCaseInput {
  transaction?: Transaction;
}

@Injectable()
export class QuoteCreateUseCase {
  constructor(private readonly quoteRepository: QuoteSqliteRepository) {}

  async execute({ transaction }: QuoteCreateUseCaseInput): Promise<Quote> {
    const quote = new Quote();

    return this.quoteRepository.create(quote, transaction);
  }
}
