import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AboutMeModule } from '../AboutMe/aboutMe.module';
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
  imports: [ConfigModule.forRoot(), MainModule, AboutMeModule, ExperienceModule, FormModule,SwiperModule,PortfolioModule,UserModule,PostModule],
  controllers: [AppController],
  providers: [AppService, Gateway],
})
export class AppModule {}