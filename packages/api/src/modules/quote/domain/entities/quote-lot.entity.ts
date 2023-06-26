/* eslint-disable no-use-before-define */
import { randomUUID } from "crypto";

import { QuoteItem } from "./quote-item.entity";

export class QuoteLot {
  id: string;

  createdAt: Date;

  updatedAt: Date;

  amount: number;

  subLots?: QuoteLot[];

  items?: QuoteItem[];

  constructor() {
    const date = new Date();

    this.id = randomUUID();
    this.createdAt = date;
    this.updatedAt = date;
    this.amount = 0;
    this.subLots = [];
    this.items = [];
  }
}
