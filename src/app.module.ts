import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CoinsModule } from './coins/coins.module';

@Module({
  imports: [UserModule, CoinsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
