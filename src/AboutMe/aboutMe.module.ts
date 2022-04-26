import { Module } from "@nestjs/common";
import { AboutMeController } from "./aboutMe.controller";
import { AboutMeService } from "./aboutMe.service";

@Module({
    imports:[],
    controllers:[AboutMeController],
    providers:[AboutMeService]
})
export class AboutMeModule{

}