import { QuoteLot } from "../entities";

export interface QuoteLotRepository {
  findOne: (id: string) => Promise<QuoteLot>;
  create: (quoteLot: QuoteLot, parentQuoteLotId: string) => Promise<QuoteLot>;
  delete: (id: string) => Promise<void>;
}
