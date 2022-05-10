import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Query,
    UseFilters,
  } from '@nestjs/common';
  import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../HttpExceptionFilter';
import { CreatePostDTO } from './createPostDTO';
import { PostService } from './post.service';
import { PostRO } from './postRO';
  
  @ApiTags('post')
  @Controller('post')
  export class PostController {
    constructor(private readonly postService: PostService) {}
  
    @ApiOperation({
      summary: 'Get all posts',
    })
    @ApiResponse({
      status: 200,
      description: 'Posts were found.',
      type: [PostRO],
    })
    @ApiResponse({
      status: 400,
      description: "Posts wasn't found.",
    })
    @Get('all')
    getAll(): Promise<Array<PostRO>> {
      return this.postService.findAll();
    }
  
    @ApiOperation({
      summary: 'Create post',
    })
    @ApiResponse({
      status: 201,
      description: 'The post has been successfully created.',
    })
    @Post('create')
    async post(
      @Body() createPostDTO: CreatePostDTO,
      @Query('userId', ParseIntPipe) userId: number,
    ) {
      await this.postService.createPost(createPostDTO, userId);
    }
  
    @ApiOperation({
      summary: 'Delete post',
    })
    @ApiResponse({
      status: 200,
      description: 'The post has been successfully deleted.',
    })
    @Delete('delete')
    async deleteClub(@Query('id', ParseIntPipe) postId: number) {
      await this.postService.deletePost(postId);
    }
  
    @ApiOperation({
      summary: 'Get post by user id',
    })
    @ApiResponse({
      status: 200,
      description: 'The post(s) was found.',
      type: [PostRO],
    })
    @Get(':id')
    @UseFilters(new HttpExceptionFilter())
    getPosts(@Param('id', ParseIntPipe) id: number): Promise<Array<PostRO>> {
      return this.postService.findPostById(id);
    }
  }