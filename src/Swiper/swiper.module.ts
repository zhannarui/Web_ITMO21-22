import { Module } from "@nestjs/common";
import { SwiperController } from "./swiper.controller";
import { SwiperService } from "./swiper.service";

@Module({
    imports:[],
    controllers:[SwiperController],
    providers:[SwiperService]
})
export class SwiperModule{}