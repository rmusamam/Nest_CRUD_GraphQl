import { Resolver,Query } from "@nestjs/graphql";
import { isNullableType } from "graphql";
import { User } from "./models/user";
import { UsersService } from "./users.service";

@Resolver(()=>User)

export class UsersResolver{
constructor(private readonly usersService:UsersService){}
    
    @Query(()=>User,{name : 'user',nullable:true})  
    async getUser():User{
        return this.usersService.getUser()
    }

}