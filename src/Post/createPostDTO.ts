import { IsBoolean, IsNotEmpty, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDTO {

    @IsNotEmpty()
    @ApiProperty({
      description: 'Title',
      example: 'New Post!',
    })
    title: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Content',
    example: 'Hello!',
  })
  content: string;

  @ApiProperty({
    description: 'Published',
    example: 'true',
  })
  published = false;

  constructor(title: string, content: string, published?: boolean) {
    this.title = title;
    this.content = content;
    this.published = published;
  }
}