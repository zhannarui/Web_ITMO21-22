import { Module } from '@nestjs/common';
import { AboutMeModule } from '../AboutMe/aboutMe.module';
import { AuthModule } from '../auth/auth.module';
import { ExperienceModule } from '../Experience/experience.module';
import { FormModule } from '../Form/form.module';
import { MainModule } from '../Main/main.module';
import { PortfolioModule } from '../Portfolio/portfolio.module';
import { PostModule } from '../Post/post.module';
import { SwiperModule } from '../Swiper/swiper.module';
import { UserModule } from '../User/user.module';
import { Gateway } from '../websocket/app.gateway';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
     MainModule,
     AboutMeModule,
     ExperienceModule,
     FormModule,
    SwiperModule,
    PortfolioModule,
    UserModule,
    PostModule,
    AuthModule.forRoot({
      connectionURI: process.env.connectionURI,
      apiKey: process.env.APIKey,
      appInfo: {
        appName: "portfoliozhanna",
        apiDomain: "http://localhost:12345",
        websiteDomain: "http://localhost:12345",
        apiBasePath: "/auth",
        websiteBasePath: "/auth",
      },
    }),],
  controllers: [AppController],
  providers: [AppService, Gateway],
})
export class AppModule {}