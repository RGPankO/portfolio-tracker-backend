import { Injectable } from '@nestjs/common';
import { Coin } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class CoinsService {
  constructor(private prisma: PrismaService) {}
  async getData(): Promise<Coin[]> {
    const coins = await this.prisma.coin.findMany();
    return coins;
  }
}
