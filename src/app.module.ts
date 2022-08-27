import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [AuthModule, UsersModule, 
  GraphQLModule.forRoot({
    autoSchemaFile:true
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
