import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { Portfolio } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('data')
  getData(): Promise<Portfolio[]> {
    return this.userService.getData();
  }
}
