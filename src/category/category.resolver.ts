
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql/dist";
import { Category } from "./category.entity";
import { CategoryMapper } from "./category.mapper";
import { CategoryService } from "./category.service";
import { CategoryPublic } from "./dto/category";
import { CategoryCreateInput } from "./dto/category-create.input";

@Resolver(of=>CategoryPublic)
export class CategoryResolver{
    constructor(private readonly CategoryService: CategoryService ){}
    @Query(returns => [CategoryPublic],{name: 'getAllCategories'})
    async getAllCategories(): Promise<CategoryPublic[]>{
        return this.CategoryService.findAll()
    }

    @Mutation(returns => CategoryPublic, { name: 'createCategory'})
    async createCategory(
        @Args('input') input: CategoryCreateInput
    ):Promise<CategoryPublic>{
        return this.CategoryService.create(CategoryMapper.toEntity(input))
    }
    
}