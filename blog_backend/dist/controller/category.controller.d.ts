import { ICreateCategory, IUpdateCategory } from 'src/model/category.model';
import { IObjectResponse } from 'src/model/response.model';
import { CategoryService } from 'src/service/category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    selectCategory(category_id: number): Promise<IObjectResponse>;
    selectAllCategorys(): Promise<IObjectResponse>;
    updateCategory(category: IUpdateCategory): Promise<IObjectResponse>;
    createCategory(category: ICreateCategory): Promise<IObjectResponse>;
    deleteCategory(category_id: number): Promise<IObjectResponse>;
}
