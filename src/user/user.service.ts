import { Injectable } from '@nestjs/common';
import { Portfolio } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getData(): Promise<Portfolio[]> {
    const portfolio = await this.prisma.portfolio.findMany();
    return portfolio;
  }
}
