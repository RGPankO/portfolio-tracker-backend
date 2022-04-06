import { Controller, Get } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { ICoinsData } from '../interfaces/Coins';

@Controller('coins')
export class CoinsController {
  constructor(private readonly coinsService: CoinsService) {}

  @Get('data')
  getData(): ICoinsData[] {
    return this.coinsService.getData();
  }
}
