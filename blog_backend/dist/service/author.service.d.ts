import { AuthorTable } from "src/entity/author.entity";
import { ICreateAuthor, IUpdateAuthor } from "src/model/author.model";
import { IObjectResponse, IPagination } from "src/model/response.model";
export declare class AuthorService {
    private readonly Author;
    constructor(Author: typeof AuthorTable);
    select(id: number): Promise<IObjectResponse>;
    selectAll(params: IPagination): Promise<IObjectResponse>;
    create(params: ICreateAuthor): Promise<IObjectResponse>;
    delete(id: number): Promise<IObjectResponse>;
    update(param: IUpdateAuthor): Promise<IObjectResponse>;
}
