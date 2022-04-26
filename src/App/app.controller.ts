import { Controller, Get, UseInterceptors, Render } from '@nestjs/common';
import { AppService, AppInterceptor  } from './app.service';


@Controller()
@UseInterceptors(AppInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index(): any {
    return {serverTime: this.appService.getResponseTime()};
  }
}
  