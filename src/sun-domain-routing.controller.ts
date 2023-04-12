import { Controller, Get, HostParam, Ip } from '@nestjs/common';

// run the controller only for specified sub domain
// we can restrict a controller for a specific host
@Controller({ path: '/users', host: ':app:domain.com' })
export class subDomainRoutingDemo {
  @Get()
  getUsers(@HostParam('domain') params: Record<string, any>) {
    return 'Hello From Sub Domain Routing Controller';
  }

  @Get('ip')
  findIp(@Ip() ip: string) {
    return { ip };
  }
}
