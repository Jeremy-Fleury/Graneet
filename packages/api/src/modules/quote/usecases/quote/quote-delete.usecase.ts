import { Injectable } from "@nestjs/common";

import { QuoteSqliteRepository } from "../../infrastructure/repositories/quote.sqlite.repository";
import { Transaction } from "../../../../common";

interface QuoteDeleteUseCaseInput {
  id: string;
  transaction?: Transaction;
}

@Injectable()
export class QuoteDeleteUseCase {
  constructor(private readonly quoteRepository: QuoteSqliteRepository) {}

  async execute({ id, transaction }: QuoteDeleteUseCaseInput): Promise<void> {
    await this.quoteRepository.delete(id, transaction);
  }
}
