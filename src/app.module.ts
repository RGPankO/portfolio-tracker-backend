import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CoinsModule } from './coins/coins.module';
import { PrismaModule } from './prisma/prisma.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [UserModule, CoinsModule, PrismaModule, TransactionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
