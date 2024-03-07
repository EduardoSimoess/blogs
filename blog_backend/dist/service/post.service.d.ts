import { PostTable } from "src/entity/post.entity";
import { ICreatePost, IUpdatePost } from "src/model/post.model";
import { IObjectResponse, IPagination } from "src/model/response.model";
export declare class PostService {
    private readonly Post;
    constructor(Post: typeof PostTable);
    select(param: number): Promise<IObjectResponse>;
    selectAll(params: IPagination): Promise<IObjectResponse>;
    create(params: ICreatePost): Promise<IObjectResponse>;
    update(params: IUpdatePost): Promise<IObjectResponse>;
    delete(params: number): Promise<IObjectResponse>;
}
