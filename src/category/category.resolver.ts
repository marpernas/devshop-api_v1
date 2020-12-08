
import { Query, Resolver } from "@nestjs/graphql/dist";
import { CategoryService } from "./category.service";
import { CategoryPublic } from "./dto/category";

@Resolver(of=>CategoryPublic)
export class CategoryResolver{
    constructor(private readonly CategoryService: CategoryService ){}
    @Query(returns => [CategoryPublic],{name: 'getAllCategories'})
    async getAllCategories(): Promise<CategoryPublic[]>{
        return this.CategoryService.findAll()
    }
    
}