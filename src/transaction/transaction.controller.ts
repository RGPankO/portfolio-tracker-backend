import { Controller, Get } from '@nestjs/common';
import { Transaction } from '@prisma/client';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('data')
  getData(): Promise<Transaction[]> {
    return this.transactionService.getData();
  }
}
