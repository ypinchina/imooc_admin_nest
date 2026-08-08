// param restful参数
// query url参数
// body post参数
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { TestService } from './test.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly testService: TestService) { }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/post_test')
  getAllData(@Body() body, @Query() query): string {
    return this.testService.getAllData(body, query)
  }
  @Get('/test/:id/:name')
  getTest(@Param() param): string {
    console.log(param)
    return 'test:' + param.id + ',' + 'name:' + param.name
  }
}
