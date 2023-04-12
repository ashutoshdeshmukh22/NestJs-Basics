import { Controller, Get, Post, Param, Query, Headers } from '@nestjs/common';

interface QueryParams {
  name: string;
  age: number;
}

@Controller('/users')
export class paramController {
  //   Route Parameters

  //   @Get('/user/:id')
  //   getUser(@Param('id') param: number) {
  //     console.log(param);
  //     return 'success';
  //   }

  // Query Parameters

  // Getting Multiple Query String
  //   @Get('/user')
  //   getUser(@Query() query: QueryParams) {
  //     console.log(query.name, query.age);
  //     return 'success';
  //   }

  // Getting Single Qery String
  //   @Get('/user')
  //   getUser(@Query('name') query: string) {
  //     console.log(query);
  //     return 'success';
  //   }

  // Getting Response Headers
  @Get('/user')
  getUser(@Headers() headers: Record<string, any>) {
    console.log(headers);
    return 'success';
  }
}
