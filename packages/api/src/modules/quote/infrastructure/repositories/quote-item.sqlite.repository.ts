import { Injectable } from "@nestjs/common";

import { QuoteItem, QuoteItemRepository } from "../../domain";
import {
  PrismaService,
  PrismaTransaction,
} from "../../../../common/infrastructure/database";

@Injectable()
export class QuoteItemSqliteRepository implements QuoteItemRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findOne(
    id: string,
    transaction?: PrismaTransaction
  ): Promise<QuoteItem> {
    const prismaService = transaction || this.prismaService;

    return prismaService.quoteItem.findUnique({
      where: { id },
    });
  }

  async create(
    quoteItem: QuoteItem,
    parentQuoteLotId: string,
    transaction?: PrismaTransaction
  ): Promise<QuoteItem> {
    const prismaService = transaction || this.prismaService;

    return prismaService.quoteItem.create({
      data: {
        id: quoteItem.id,
        createdAt: quoteItem.createdAt,
        updatedAt: quoteItem.updatedAt,
        amount: quoteItem.amount,
        quoteLot: {
          connect: {
            id: parentQuoteLotId,
          },
        },
      },
    });
  }

  async delete(id: string, transaction?: PrismaTransaction): Promise<void> {
    const prismaService = transaction || this.prismaService;

    await prismaService.quoteItem.delete({
      where: {
        id,
      },
    });
  }
}
