import { Controller, Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  controllers:[UsersResolver],
  providers: [UsersService]
})
export class UsersModule {}
