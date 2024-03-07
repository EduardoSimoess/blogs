import { Model } from "sequelize-typescript";
import { CategoryDto } from "src/model/category.model";
import { PostTable } from "./post.entity";
export declare class CategoryTable extends Model<CategoryDto> {
    category_id: number;
    category_name: string;
    category_description: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    post: PostTable;
}
