import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { paramController } from './paramdemo.controller';
import { bodyController } from './clientsendatatoserver.controller';
import { subDomainRoutingDemo } from './sun-domain-routing.controller';

@Module({
  controllers: [
    UsersController,
    AlbumsController,
    paramController,
    bodyController,
    subDomainRoutingDemo,
  ],
})
export class AppModule {}
