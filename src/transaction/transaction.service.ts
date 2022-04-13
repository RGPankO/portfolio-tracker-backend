import { Injectable } from '@nestjs/common';
import { Transaction } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}
  async getData(): Promise<Transaction[]> {
    const transactions = await this.prisma.transaction.findMany();
    return transactions;
  }
}
