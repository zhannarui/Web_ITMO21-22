import { Controller,Get,Render } from "@nestjs/common";
import { SwiperService } from "./swiper.service";

@Controller()
export class SwiperController{
    constructor(private readonly swiperService:SwiperService){}
    @Get(['/','views','swiper'])
    @Render('swiper')
    swiper(){}
}