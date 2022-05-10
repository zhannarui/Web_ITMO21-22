import { Module } from '@nestjs/common';
import { PrismaService } from '../data/prisma.service';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [PostService, PrismaService],
})
export class PostModule {}