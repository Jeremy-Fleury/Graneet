import { randomUUID } from "crypto";

export interface QuoteItemInput {
  amount?: number;
}

export class QuoteItem {
  id: string;

  createdAt: Date;

  updatedAt: Date;

  amount: number;

  constructor(input?: QuoteItemInput) {
    const date = new Date();

    this.id = randomUUID();
    this.createdAt = date;
    this.updatedAt = date;
    this.amount = input?.amount || 0;
  }
}
