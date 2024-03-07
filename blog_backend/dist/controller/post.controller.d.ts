import { ICreatePost, IUpdatePost } from 'src/model/post.model';
import { IObjectResponse, IPagination } from 'src/model/response.model';
import { PostService } from 'src/service/post.service';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    selectPost(post_id: number): Promise<IObjectResponse>;
    selectAllPosts(params: IPagination): Promise<IObjectResponse>;
    createPost(post: ICreatePost): Promise<IObjectResponse>;
    updatePost(post: IUpdatePost): Promise<IObjectResponse>;
    deletePost(post: number): Promise<IObjectResponse>;
}
