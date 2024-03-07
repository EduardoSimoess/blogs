import { CategoryTable } from 'src/entity/category.entity';
import { ICreateCategory, IUpdateCategory } from 'src/model/category.model';
import { IObjectResponse } from 'src/model/response.model';
export declare class CategoryService {
    private readonly Category;
    constructor(Category: typeof CategoryTable);
    select(parm: number): Promise<IObjectResponse>;
    selectAll(): Promise<IObjectResponse>;
    create(params: ICreateCategory): Promise<IObjectResponse>;
    update(params: IUpdateCategory): Promise<IObjectResponse>;
    delete(params: number): Promise<IObjectResponse>;
}
