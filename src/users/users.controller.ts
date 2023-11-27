import { Controller,Post, Body, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';


@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("login")
  create(@Body() loginDto: LoginDto, @Res({passthrough: true}) res: Response) {
    return this.usersService.login(loginDto, res);
  }
}
