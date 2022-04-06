import { Injectable } from '@nestjs/common';
import { IUserData } from '../interfaces/User';

@Injectable()
export class UserService {
  getData(): IUserData[] {
    return [
      {
        amount: '1.000',
        symbol: 'BTC',
      },
      {
        amount: '2.000',
        symbol: 'ETH',
      },
    ];
  }
}
