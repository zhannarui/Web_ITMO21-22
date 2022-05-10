import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
export class createUserDTO{
    @IsEmail()
      @ApiProperty({
        description: 'Email',
        example: 'email@email.com',
      })
      email: string;
    @IsNotEmpty()
      @ApiProperty({
        description: 'Name',
        example: 'Zhanna',
      })
      name: string;
      constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
      }
}