import { Controller,Get,Render } from "@nestjs/common";
import { FormService } from "./form.service";

@Controller()
export class FormController{
    constructor(private readonly formService:FormService){}
    @Get(['/','views','form'])
    @Render('form')
    form(){}
}