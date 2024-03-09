import { Model } from "sequelize-typescript";
import { UserDto } from "src/model/user.model";
export declare class UserTable extends Model<UserDto> {
    user_id: number;
    user_name: string;
    user_last_name: string;
    user_email: string;
    user_telephone: string;
    user_password: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
