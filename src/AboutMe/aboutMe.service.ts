import { Injectable, NotImplementedException } from "@nestjs/common";
import { Post, User } from "@prisma/client";


@Injectable()
export class AboutMeService{
    async loadPosts(id:string, username:string):Promise<Post>{
        throw new NotImplementedException();
    }
    async loadUser(id:string, username:string):Promise<User>{
        throw new NotImplementedException();
    }
    async createPost(id:string, username:string):Promise<Post>{
        throw new NotImplementedException();
    }
}