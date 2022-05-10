import { ApiProperty } from '@nestjs/swagger';
export class userRO{
    @ApiProperty({
        description: 'Id',
        example: '1',
      })
      id: number;
    
      @ApiProperty({
        description: 'Email',
        example: 'email@email.com',
      })
      email: string;
    
      @ApiProperty({
        description: 'Name',
        example: 'Zhanna',
      })
      name: string;
    
      constructor(id: number, email: string, name: string) {
        this.id = id;
        this.email = email;
        this.name = name;
      }
}