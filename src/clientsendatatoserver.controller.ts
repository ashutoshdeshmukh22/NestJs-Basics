import { Controller, Post, Body } from '@nestjs/common';

// it a simple notation that our data should be in below format
interface userDTO {
  name: string;
  age: number;
}

@Controller('/users')
export class bodyController {
  // handling urlencoded and JSON data in the body send from client
  @Post('/adduser')
  addUser(@Body() requestData: userDTO) {
    console.log(requestData.name, requestData.age);
    return { success: true };
  }

  // Access Specific Value
  //   @Post('/adduser')
  //   addUser(@Body('name') requestData: string) {
  //     console.log(requestData);
  //     return { success: true };
  //   }
}
