import { Controller, Get, UseInterceptors, Render, UseGuards, Session } from '@nestjs/common';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { AuthGuard } from '../auth/auth.guard';
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
  @Get('test')
  @UseGuards(AuthGuard)
  async getTest(@Session() session: SessionContainer): Promise<string> {
    // TODO: magic
    return "magic";
  }
  @Get(['/','views','loginPage'])
    @Render('loginPage')
    loginPage(){}

  @Get(['/','views','registerPage'])
    @Render('registerPage')
    registerPage(){}
  @Get(['/','views','authorized'])
    @Render('authorized')
    authorized(){}
}
  