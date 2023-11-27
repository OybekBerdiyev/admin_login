import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { TokensService } from '../tokens/tokens.service';
import { Response } from 'express';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userSchema: Model<UserDocument>, 
  private readonly tokenService: TokensService,
  ) {}

  async login (loginDto: LoginDto, res: Response) {
    const {username, password} = loginDto;
    const user = await this.userSchema.findOne({username:username})
    if(!user) {
      throw new UnauthorizedException('username or password incorrect1')
    }

    const tokens = await this.tokenService.getToken(user)
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15*24*60*60*1000,
      httpOnly: true,
    })

  
    
    const response = {
      message: "user loggid in",
      user,
      tokens
    }
    return response
  }


}
