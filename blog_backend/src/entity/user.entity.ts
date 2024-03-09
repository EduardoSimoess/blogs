import { Table,  Model, Column, DataType } from "sequelize-typescript";
import { UserDto } from "src/model/user.model";

@Table({ tableName: 'user', paranoid: true})
export class UserTable extends Model<UserDto> {
    @Column({
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER.UNSIGNED
    })
    user_id: number;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    user_name: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    user_last_name: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    user_email: string;

    @Column({
        allowNull: true,
        type: DataType.STRING
    })
    user_telephone: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    user_password: string;

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
}