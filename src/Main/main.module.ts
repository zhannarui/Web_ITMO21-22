import { Module } from "@nestjs/common";
import { MainController } from "./main.controller";
import { MainService } from "./main.service";

@Module({
    imports:[],
    controllers:[MainController],
    providers:[MainService]
})
export class MainModule{
    
}