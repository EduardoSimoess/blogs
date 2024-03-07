import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { PostDto } from "src/model/post.model";
import { CategoryTable } from "./category.entity";
import { AuthorTable } from "./author.entity";

@Table({ tableName: 'post', paranoid: true })
export class PostTable extends Model<PostDto> {
    @Column({
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER.UNSIGNED
    })
    post_id: number;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    post_slug: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    post_titel: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    post_subtitle: string;

    @Column({
        allowNull: true,
        type: DataType.STRING
    })
    post_picture: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    post_text: string;


    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    createdAt: Date = new Date();
    
    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    updatedAt: Date = new Date();
    
    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    deletedAt: Date;

    @ForeignKey(() => CategoryTable)
    @Column
    category_id: number;

    @BelongsTo(() => CategoryTable, { foreignKey: 'category_id'})
    category: CategoryTable;

    @ForeignKey(() => AuthorTable)
    @Column
    author_id: number;

    @BelongsTo(() => AuthorTable, { foreignKey: 'author_id'})
    author: AuthorTable;

}
