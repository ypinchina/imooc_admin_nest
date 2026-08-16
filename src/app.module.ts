import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestService } from './test.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { BookModule } from './modules/book/book.module';
import { AuthController } from './modules/auth/auth.controller';
import { BookController } from './modules/book/book.controller';

@Module({
  imports: [UserModule, AuthModule, BookModule],
  controllers: [AppController, AuthController, BookController],
  providers: [AppService, TestService],
})
export class AppModule {}
