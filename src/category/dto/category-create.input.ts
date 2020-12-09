import { Field, InputType } from "@nestjs/graphql/dist";

@InputType()
export class CategoryCreateInput{

    @Field()
    name: string

    @Field()
    slug: string
}