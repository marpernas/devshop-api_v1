import { Field, ObjectType } from "@nestjs/graphql/dist";

@ObjectType()
export class Category{
    @Field({ nullable:true})
    id: string

    @Field({ nullable: true})
    name: string
}