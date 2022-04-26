import { Controller, Get, Render } from "@nestjs/common";
import { ExperienceService } from "./experience.service";


@Controller()
export class ExperienceController{
    constructor(private readonly experienceService:ExperienceService){}
    @Get(['/','views','experience'])
    @Render('experience')
    experience(){
        return;
    }
}