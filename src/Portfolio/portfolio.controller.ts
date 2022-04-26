import { Controller,Get,Render } from "@nestjs/common";
import { PortfolioService } from "./portfolio.service";

@Controller()
export class PortfolioController{
    constructor(private readonly portfolioService:PortfolioService){}
    @Get(['/','views','portfolio'])
    @Render('portfolio')
    portfolio(){}
}