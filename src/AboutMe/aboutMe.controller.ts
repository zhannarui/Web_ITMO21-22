import { Controller, Get, Post, Query, Render } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import {  User } from "@prisma/client";
import { AboutMeService } from "./aboutMe.service";

@ApiBearerAuth()
@ApiTags('About me')
@Controller()
export class AboutMeController{
    constructor(private readonly aboutMeService:AboutMeService){}
    @Get(['/','views','aboutMe'])
    @Render('aboutMe')
    aboutMe(){}


    @ApiOperation(
        { summary: 'Load Posts' }
    )
    @ApiParam(
        { name: 'id', type: 'string' }
    )
    @ApiParam(
        { name: 'username', type: 'string'}
    )
    @ApiResponse(
        { status: 403, description: 'Forbidden.'}
    )
    @Get('posts')
    async loadPosts(
        @Query('id') id,
        @Query('username') username,
    ) {
        return await this.aboutMeService.loadPosts(id, username)
    }

    @ApiOperation(
        { summary: 'Create Posts' }
    )
    @ApiParam(
        { name: 'id', type: 'string' }
    )
    @ApiParam(
        { name: 'username', type: 'string'}
    )
    @ApiResponse(
        { status: 403, description: 'Forbidden.'}
    )
    @Post('createPost')
    async createPost(
        @Query('id') id,
        @Query('username') username,
    ) {
        return await this.aboutMeService.createPost(id, username)
    }
}