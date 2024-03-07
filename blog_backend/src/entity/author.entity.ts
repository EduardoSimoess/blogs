import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { AuthorDto } from "src/model/author.model";
import { PostTable } from "./post.entity";

@Table({ tableName: 'author', paranoid: true })
export class AuthorTable extends Model<AuthorDto> {
    @Column({
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER.UNSIGNED
    })
    author_id: number;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    author_name: string;

    @Column({
        allowNull: false,
        type: DataType.TEXT
    })
    author_description: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    author_picture: string;

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

      @HasMany(() => PostTable, { foreignKey: 'author_id' })
      post: PostTable;
}