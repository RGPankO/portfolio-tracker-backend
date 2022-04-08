import { Controller, Get } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { Coin } from '@prisma/client';

@Controller('coins')
export class CoinsController {
  constructor(private readonly coinsService: CoinsService) {}

  @Get('data')
  async getData(): Promise<Coin[]> {
    return await this.coinsService.getData();
  }
}
