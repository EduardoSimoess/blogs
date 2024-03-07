import { Model } from "sequelize-typescript";
import { PostDto } from "src/model/post.model";
import { CategoryTable } from "./category.entity";
import { AuthorTable } from "./author.entity";
export declare class PostTable extends Model<PostDto> {
    post_id: number;
    post_slug: string;
    post_titel: string;
    post_subtitle: string;
    post_picture: string;
    post_text: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    category_id: number;
    category: CategoryTable;
    author_id: number;
    author: AuthorTable;
}
