import { randomUUID } from "crypto";

import { QuoteLot } from "./quote-lot.entity";

export class Quote {
  id: string;

  createdAt: Date;

  updatedAt: Date;

  amount: number;

  rootLot: QuoteLot;

  constructor() {
    const date = new Date();

    this.id = randomUUID();
    this.createdAt = date;
    this.updatedAt = date;
    this.amount = 0;
    this.rootLot = new QuoteLot();
  }
}
