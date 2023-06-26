import { QuoteItem } from "../entities";

export interface QuoteItemRepository {
  findOne: (id: string) => Promise<QuoteItem>;
  create: (
    quoteItem: QuoteItem,
    parentQuoteLotId: string
  ) => Promise<QuoteItem>;
  delete: (id: string) => Promise<void>;
}
