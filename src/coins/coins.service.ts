import { Injectable } from '@nestjs/common';
import { ICoinsData } from '../interfaces/Coins';

@Injectable()
export class CoinsService {
  getData(): ICoinsData[] {
    return [
      {
        symbol: 'BTC',
        coingeckoId: 'bitcoin',
      },
      {
        symbol: 'ETH',
        coingeckoId: 'ethereum',
      },
    ];
  }
}
