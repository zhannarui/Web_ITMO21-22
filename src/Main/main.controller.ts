
import { Controller, Get, Render } from "@nestjs/common";
import { MainService } from "./main.service";

@Controller()
export class MainController{
    constructor(private readonly mainService:MainService){}
    @Get(['/','views','index'])
    @Render('index')
    main(){}

}