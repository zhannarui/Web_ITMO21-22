import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AboutMeModule } from '../AboutMe/aboutMe.module';
import { ExperienceModule } from '../Experience/experience.module';
import { FormModule } from '../Form/form.module';
import { MainModule } from '../Main/main.module';
import { PortfolioModule } from '../Portfolio/portfolio.module';
import { SwiperModule } from '../Swiper/swiper.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), MainModule, AboutMeModule, ExperienceModule, FormModule,SwiperModule,PortfolioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}