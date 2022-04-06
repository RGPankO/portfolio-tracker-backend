import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { IUserData } from '../interfaces/User';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('data')
  getData(): IUserData[] {
    return this.userService.getData();
  }
}
