import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestService } from './test.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { BookModule } from './modules/book/book.module';
import { AuthController } from './modules/auth/auth.controller';
import { BookController } from './modules/book/book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';
const homedir = os.homedir();
const usernamePath = path.resolve(homedir, 'vben', 'username');
const username = fs.readFileSync(usernamePath).toString();
const passwordPath = path.resolve(homedir, 'vben', 'password');
const password = fs.readFileSync(passwordPath).toString();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      username,
      password,
      host: 'localhost',
      port: 3306,
      database: 'vben-book-dev',
      autoLoadEntities: true
    }),
    UserModule, AuthModule, BookModule,],
  controllers: [AppController, AuthController, BookController],
  providers: [AppService, TestService],
})
export class AppModule { }
