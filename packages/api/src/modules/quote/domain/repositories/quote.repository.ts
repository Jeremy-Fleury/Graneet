import { Quote } from "../entities";

export interface QuoteRepository {
  findOne: (id: string) => Promise<Quote>;
  create: (quote: Quote) => Promise<Quote>;
  delete: (id: string) => Promise<void>;
}
