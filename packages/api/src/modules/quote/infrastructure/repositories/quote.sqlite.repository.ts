import { Injectable } from "@nestjs/common";

import { Quote, QuoteRepository } from "../../domain";
import {
  PrismaService,
  PrismaTransaction,
} from "../../../../common/infrastructure/database";

@Injectable()
export class QuoteSqliteRepository implements QuoteRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findOne(id: string, transaction?: PrismaTransaction): Promise<Quote> {
    const prismaService = transaction || this.prismaService;

    return prismaService.quote.findUnique({
      where: { id },
      include: { rootLot: true },
    });
  }

  async create(quote: Quote, transaction?: PrismaTransaction): Promise<Quote> {
    const prismaService = transaction || this.prismaService;

    return prismaService.quote.create({
      data: {
        id: quote.id,
        createdAt: quote.createdAt,
        updatedAt: quote.updatedAt,
        amount: quote.amount,
        rootLot: {
          create: {
            id: quote.rootLot.id,
            createdAt: quote.rootLot.createdAt,
            updatedAt: quote.rootLot.updatedAt,
            amount: quote.rootLot.amount,
          },
        },
      },
      include: { rootLot: true },
    });
  }

  async delete(id: string, transaction?: PrismaTransaction): Promise<void> {
    const prismaService = transaction || this.prismaService;

    await prismaService.quote.delete({
      where: {
        id,
      },
    });
  }
}
