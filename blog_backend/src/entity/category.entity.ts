import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { CategoryDto } from "src/model/category.model";
import { PostTable } from "./post.entity";

@Table({ tableName: 'category', paranoid: true })
export class CategoryTable extends Model<CategoryDto> {
    @Column({
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER.UNSIGNED
    })
    category_id: number;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    category_name: string;

    @Column({
        allowNull: false,
        type: DataType.TEXT
    })
    category_description: string;

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

      @HasMany(() => PostTable, { foreignKey: 'category_id'})
      post: PostTable;
}