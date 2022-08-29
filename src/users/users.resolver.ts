import { Resolver,Query, Args, Mutation } from "@nestjs/graphql";
import { isNullableType } from "graphql";
import { GetUserArgs } from "src/users/dto/args/get-user.args";
import { GetUsersArgs } from "src/users/dto/args/get-users.args";
import { CreateUserInput } from "src/users/dto/input/create-user-input";
import { DeleteUserInput } from "./dto/input/delete-user-input";
import { UpdateUserInput } from "./dto/input/update-user-input";
import { User } from "./models/user";
import { UsersService } from "./users.service";

@Resolver(()=>User)

export class UsersResolver{
constructor(private readonly usersService:UsersService){}
    
    @Query(()=>User,{name : 'user', nullable:true})  
    async getUser(@Args() getUserArgs:GetUserArgs):User{
        return this.usersService.getUser()
    }

    @Query(()=>[User],{name:'users',nullable:'items'})
    getUsers(@Args() getUsersArgs:GetUsersArgs): User[]{
        return this.usersService.getUsers()
    }

    @Mutation(()=>User)
    createUser(@Args('createUserData') createUserData:CreateUserInput):User {
        return this.usersService.createUser()
    } 

    @Mutation(()=>User)
    updateUser(@Args('updateUserData') updateUserData:UpdateUserInput):User {
        return this.usersService.updateUser()
    }
    
    @Mutation(()=>User)
    deleteUser(@Args('deleteUserData') deleteUserData:DeleteUserInput):User{
        return this.usersService.deleteUser()
    }
}