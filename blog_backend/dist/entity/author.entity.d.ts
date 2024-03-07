import { Model } from "sequelize-typescript";
import { AuthorDto } from "src/model/author.model";
import { PostTable } from "./post.entity";
export declare class AuthorTable extends Model<AuthorDto> {
    author_id: number;
    author_name: string;
    author_description: string;
    author_picture: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    post: PostTable;
}
