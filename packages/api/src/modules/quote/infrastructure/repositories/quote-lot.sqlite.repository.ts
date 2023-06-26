import { Injectable } from "@nestjs/common";

import { QuoteLot, QuoteLotRepository } from "../../domain";
import {
  PrismaService,
  PrismaTransaction,
} from "../../../../common/infrastructure/database";

@Injectable()
export class QuoteLotSqliteRepository implements QuoteLotRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findOne(
    id: string,
    transaction?: PrismaTransaction
  ): Promise<QuoteLot> {
    const prismaService = transaction || this.prismaService;

    return prismaService.quoteLot.findUnique({
      where: { id },
    });
  }

  async create(
    quoteLot: QuoteLot,
    parentQuoteLotId: string,
    transaction?: PrismaTransaction
  ): Promise<QuoteLot> {
    const prismaService = transaction || this.prismaService;

    return prismaService.quoteLot.create({
      data: {
        id: quoteLot.id,
        createdAt: quoteLot.createdAt,
        updatedAt: quoteLot.updatedAt,
        amount: quoteLot.amount,
        parentQuoteLot: {
          connect: {
            id: parentQuoteLotId,
          },
        },
      },
    });
  }

  async delete(id: string, transaction?: PrismaTransaction): Promise<void> {
    const prismaService = transaction || this.prismaService;

    await prismaService.quoteLot.delete({
      where: {
        id,
      },
    });
  }
}
