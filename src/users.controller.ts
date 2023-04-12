import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUserDTO } from './dto';

let USERS = [];

@Controller('/users')
export class UsersController {
  @Post('adduser')
  addUser(@Body() createUserDto: CreateUserDTO) {
    USERS.push(createUserDto);
    return 'User Added';
  }

  @Get('getusers')
  getUsers() {
    return USERS;
  }

  @Get('getuser/:id')
  findUserById(@Param('id') id: number) {
    const user = USERS.find((user) => user.id === +id);

    if (!user) {
      return { message: 'User not found' };
    }

    return user;
  }

  @Put('updateuser/:id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDTO) {
    const userIdx = USERS.findIndex((user) => user.id === +id);

    if (!userIdx) {
      return { message: 'User not found' };
    }

    USERS[userIdx] = updateUserDto;

    return { message: 'User updated' };
  }

  @Delete('deleteuser/:id')
  deleteUser(@Param('id') id: number) {
    USERS = USERS.filter((user) => user.id !== +id);

    return { message: 'User deleted' };
  }
}
