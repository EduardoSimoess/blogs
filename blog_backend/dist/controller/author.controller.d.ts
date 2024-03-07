import { ICreateAuthor, IUpdateAuthor } from 'src/model/author.model';
import { IObjectResponse, IPagination } from 'src/model/response.model';
import { AuthorService } from 'src/service/author.service';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    selectAuthor(author_id: number): Promise<IObjectResponse>;
    selectAllAuthors(params: IPagination): Promise<IObjectResponse>;
    deleteAuthor(author_id: number): Promise<IObjectResponse>;
    updateAuthor(author: IUpdateAuthor): Promise<IObjectResponse>;
    createAuthor(author: ICreateAuthor): Promise<IObjectResponse>;
}
