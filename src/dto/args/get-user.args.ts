import { ArgsType } from "@nestjs/graphql";

@ArgsType
exports class GetUserArgs{
    @Field()
    userId:string
}