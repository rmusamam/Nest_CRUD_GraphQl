import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNegative, IsNotEmpty } from "class-validator";

@InputType()
export class CreateUserInput{
    @Field()
    @IsNotEmpty()
    @IsEmail()
    email:string

    @Field()
    @IsNotEmpty()
    age:number

}