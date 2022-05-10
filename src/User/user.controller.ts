import { Body, Controller, Get, Param, Post, UseFilters, HttpException} from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { HttpExceptionFilter } from "../HttpExceptionFilter";
import { createUserDTO } from "./createUserDTO";
import { UserService } from "./user.service";
import { userRO } from "./userRO";

  @ApiTags('user')
  @Controller('user')
  export class UserController {
    constructor(private readonly userService: UserService) {}
    @ApiOperation({
      summary: 'Get user by email',
    })
    @ApiResponse({
      status: 200,
      description: 'The user was found.',
      type: userRO,
    })
    @ApiResponse({
      status: 400,
      description: "The user wasn't found.",
    })
    @Get(':email')
    @UseFilters(new HttpExceptionFilter())
    getUser(@Param('email') email: string): Promise<userRO> {
      return this.userService.findUserByEmail(email);
    }
  
    @ApiOperation({
      summary: 'Register user',
    })
    @ApiCreatedResponse({
      description: 'The user has been successfully created.',
    })
    @Post('register')
    async register(@Body() createUserDto: createUserDTO) {
      await this.userService.createUser(createUserDto);
    }
  }