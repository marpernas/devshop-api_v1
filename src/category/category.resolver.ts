
import { Query, Resolver } from "@nestjs/graphql/dist";
import { CategoryService } from "./category.service";
import { Category } from "./dto/category";

@Resolver(of=>Category)
export class CategoryResolver{
    constructor(private readonly CategoryService: CategoryService ){}
    @Query(returns => [Category],{name: 'getAllCategories'})
    async getAllCategories(): Promise<Category[]>{
        return this.CategoryService.findAll()
    }
    
}